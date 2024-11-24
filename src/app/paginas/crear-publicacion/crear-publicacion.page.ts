import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonTextarea } from '@ionic/angular/standalone';
import { FotografiaComponent } from "../../componentes/fotografia/fotografia.component";
import { AlmacenamientoService } from 'src/app/servicios/almacenamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
  standalone: true,
  imports: [ 
    IonButton,
    IonItem,
    IonList,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInput,
    IonTextarea,
    FotografiaComponent
]
})
export class CrearPublicacionPage implements OnInit {

  // Variables usadas por el formulario de la página
  titulo: string = "";
  descripcion: string = "";
  fotografiaBase64: string | undefined = undefined;

  // ngModels del template.
  @ViewChild("tituloInput") tituloInput!: NgModel;
  @ViewChild("descripcionInput") descripcionInput!: NgModel;

  constructor(private _almacenamientoService: AlmacenamientoService, private _router: Router) {

  }

  async ngOnInit() {
    // Al inicializar la página que se inicialice el plugin del servicio de almacenamiento.
    await this._almacenamientoService.initPlugin();
  }

  ngAfterViewInit() {
    // Se ejecuta después de inicializa la vista.
    // Marca los inputs del formulario como tocados para que se muestren sus errores inmediatamente.
    this.tituloInput.control.markAsTouched();
    this.descripcionInput.control.markAsTouched();
  }

  onFotografiaBase64Change(fotografiaBase64: string) {
    // Se ejecuta cuando la fotografía cambia.
    this.fotografiaBase64 = fotografiaBase64;
  }

  async addPublicacion() {
    // Obtener fecha actual
    const fecha = new Date();
    // Llama al servico para que este agregue la publicacion en la base de datos.
    await this._almacenamientoService.addPublicacion(
      this.titulo,
      this.descripcion,
      this.fotografiaBase64 ?? "",
      fecha
    );
    // Limpiar
    this.titulo = "";
    this.descripcion = "";
    this.fotografiaBase64 = undefined;
    // Redirigir a la página de inicio, mediante router.
    this._router.navigateByUrl('/publicaciones');

  }

}
