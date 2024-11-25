import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonContent, IonTitle, IonButton } from "@ionic/angular/standalone";
import { AlmacenamientoService } from 'src/app/servicios/almacenamiento.service';

@Component({
  selector: 'app-modal-eliminar-publicacion',
  templateUrl: './modal-eliminar-publicacion.component.html',
  styleUrls: ['./modal-eliminar-publicacion.component.scss'],
  standalone: true,
  imports: [IonButton, IonTitle, IonHeader, IonToolbar, IonButtons, IonContent, IonModal]
})
export class ModalEliminarPublicacionComponent  implements OnInit {

  // Para indicar si el modal debe estar abierto
  @Input() isModalOpen: boolean = false;
  // Event emitter para notificar cuando se cierra el modal
  @Output() closeModalEvent = new EventEmitter();
  // Evento para cuando se confirma la eliminación de la publicación
  @Output() eliminarPublicacionEvent = new EventEmitter();

  constructor(private _almacenamientoService: AlmacenamientoService) { }

  async ngOnInit() {
    // Al inicializar la página que se inicialice el plugin del servicio de almacenamiento.
    await this._almacenamientoService.initPlugin();
  }

  closeModal() {
    // Emitir el evento para cerrar el modal
    this.closeModalEvent.emit();
  }

  deletePublicacion() {
    // Cuando se presiona en el botón de eliminar, se gatilla al padre la confirmación de eliminación
    this.eliminarPublicacionEvent.emit();
  }

}
