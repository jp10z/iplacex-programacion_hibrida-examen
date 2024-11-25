import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon, IonList } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { AlmacenamientoService } from 'src/app/servicios/almacenamiento.service';
import { Publicacion } from 'src/app/modelo/publicacion';
import { ItemPublicacionComponent } from "../../componentes/item-publicacion/item-publicacion.component";
import { ModalEliminarPublicacionComponent } from "../../componentes/modal-eliminar-publicacion/modal-eliminar-publicacion.component";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
  standalone: true,
  imports: [IonList, IonIcon, IonFab, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, ItemPublicacionComponent, ModalEliminarPublicacionComponent]
})
export class PublicacionesPage implements OnInit {

  // Array de las publicaciones cargadas
  publicaciones: Publicacion[] = [];

  // Indica si el modal de eliminar publicación debe estar abierto
  isModalEliminacionOpen: boolean = false;

  // Almacena el id de la publicación a eliminar
  idPublicacionAEliminar: number = 0;

  constructor(private _almacenamientoService: AlmacenamientoService) {
    addIcons({
      add
    });
  }

  async ngOnInit() {
    // Al momento de inicializar la página se llama al servicio de almacenamiento para que se inicialice.
    await this._almacenamientoService.initPlugin();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    // Obtiene el listado de publicaciones desde el servicio de almacenamiento.
    // Solamente se llama si el servicio de citas ya fue inicializado.
    if (!this._almacenamientoService.inicializado) return;
    this.publicaciones = await this._almacenamientoService.getPublicaciones();
  }

  setModalEliminacionOpen(idPublicacion: number) {
    // Setear el id de la publicación a eliminar
    this.idPublicacionAEliminar = idPublicacion;
    // Setear el estado abierto del modal de eliminación
    this.isModalEliminacionOpen = true;
  }

  closeModalEliminacion() {
    // Cierra el modal de eliminación
    this.isModalEliminacionOpen = false;
  }

  async deletePublicacion() {
    // Cierra el modal de eliminación
    this.isModalEliminacionOpen = false;
    // Eliminar la publicación con el id indicado
    await this._almacenamientoService.deletePublicacion(this.idPublicacionAEliminar);
    // Recargar la lista de publicaciones
    this.ionViewWillEnter();
  }

}
