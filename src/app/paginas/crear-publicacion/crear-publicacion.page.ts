import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonTextarea
} from '@ionic/angular/standalone';
import { FotografiaComponent } from "../../componentes/fotografia/fotografia.component";

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
  fotografia: string = "";

  constructor() {

  }

  ngOnInit() {
  }

  async addPublicacion() {
    
  }

}
