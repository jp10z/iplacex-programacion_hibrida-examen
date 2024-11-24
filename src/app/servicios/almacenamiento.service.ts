import { Injectable } from "@angular/core";
import { Publicacion } from "../modelo/publicacion";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";
import { Capacitor } from "@capacitor/core";

@Injectable({
  providedIn: "root",
})
export class AlmacenamientoService {
  inicializado: boolean = false;
  private sqliteConnection: SQLiteConnection = new SQLiteConnection(
    CapacitorSQLite
  );
  private db!: SQLiteDBConnection;
  private platform: string = "";
  private DB_NAME: string = "publicaciones";
  private DB_ENCRYPT: boolean = false;
  private DB_MODE: string = "no-encryption";
  private DB_VERSION: number = 1;
  private DB_READ_ONLY: boolean = false;
  private DB_SQL_TABLES: string = `
    CREATE TABLE IF NOT EXISTS publicacion (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      fotografiaBase64 TEXT NOT NULL,
      fecha TEXT NOT NULL
    );
  `;

  constructor() {}

  private async _initPluginWeb(): Promise<void> {
    await customElements.whenDefined("jeep-sqlite");
    const jeepSqliteEl = document.querySelector("jeep-sqlite");
    if (jeepSqliteEl !== null) {
      await this.sqliteConnection.initWebStore();
    }
  }

  async initPlugin() {
    if (this.inicializado) return;
    this.platform = Capacitor.getPlatform();
    if (this.platform === "web") {
      await this._initPluginWeb();
    }
    await this._openConnection();
    await this._initDatabase();
    this.inicializado = true;
  }

  private async _openConnection() {
    const ret = await this.sqliteConnection.checkConnectionsConsistency();
    const isConn = (
      await this.sqliteConnection.isConnection(this.DB_NAME, this.DB_READ_ONLY)
    ).result;
    if (ret.result && isConn) {
      this.db = await this.sqliteConnection.retrieveConnection(
        this.DB_NAME,
        this.DB_READ_ONLY
      );
    } else {
      this.db = await this.sqliteConnection.createConnection(
        this.DB_NAME,
        this.DB_ENCRYPT,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      );
    }
    await this.db.open();
  }

  async _initDatabase(): Promise<void> {
    // Función que inicializa la base de datos en caso de que no se haya inicializado aún.
    // La siguiente consulta es para validar si la tabla 'publicacion' existe o no.
    const sqlQuery =
      "SELECT name FROM sqlite_master WHERE type='table' AND name='publicacion';";
    const result = await this.db.query(sqlQuery);
    // Si existe entonces que haga retorno anticipado y no haga nada.
    if (result && Array.isArray(result.values) && result.values.length > 0)
      return;
    // Si existe entonces que cree la tabla.
    await this.db.execute(this.DB_SQL_TABLES);
  }

  async addPublicacion(titulo: string, descripcion: string, fotografiaBase64: string, fecha: Date): Promise<void> {
    // Agrega una cita a la base de datos, se hace formateo de la fecha para insertarla como string.
    const sqlQuery = `INSERT INTO publicacion (titulo, descripcion, fotografiaBase64, fecha) VALUES (?, ?, ?, ?);`;
    await this.db.run(sqlQuery, [titulo, descripcion, fotografiaBase64, fecha.toISOString()]);
  }

  async getPublicaciones(): Promise<Publicacion[]> {
    // Obtiene un array con todas las publicaciones desde la base de datos.
    const sqlQuery = "SELECT id, titulo, descripcion, fotografiaBase64, fecha FROM publicacion;";
    const result = await this.db.query(sqlQuery);
    return result?.values ?? [];
  }

  async deletePublicacion(id: number): Promise<void> {
    // Elimina una publicacion de la base de datos según el id especificado.
    const sqlQuery = `DELETE FROM publicacion WHERE id = ?;`;
    await this.db.run(sqlQuery, [id]);
  }
}