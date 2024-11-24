import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItem, IonButton, IonIcon, IonImg, IonLabel } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
@Component({
  selector: 'app-item-publicacion',
  templateUrl: './item-publicacion.component.html',
  styleUrls: ['./item-publicacion.component.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonItem, CommonModule, IonButton, IonIcon]
})
export class ItemPublicacionComponent  implements OnInit {

  // Datos de la publicación
  @Input() id: number = 0;
  @Input() titulo: string = "";
  @Input() fotografiaBase64: string = "";
  @Input() fecha: Date = new Date();

  // Evento para mostrar el modal de eliminar publicación, se envía un number
  @Output() showModalDeletePublicacionEvent = new EventEmitter<number>();

  constructor() {
      addIcons({trashOutline}); }

  ngOnInit() {
    addIcons({
      trashOutline
    });
  }

  showModalDeletePublicacion() {
    this.showModalDeletePublicacionEvent.emit(this.id);
  }

}
