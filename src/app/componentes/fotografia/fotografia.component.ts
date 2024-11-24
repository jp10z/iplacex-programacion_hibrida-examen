import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonButton, IonIcon, IonImg } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.scss'],
  standalone: true,
  imports: [IonImg, 
    IonButton,
    IonIcon,
    CommonModule
  ]
})
export class FotografiaComponent  implements OnInit {

  // Para almacenar el base64 de la imagen dentro del componente
  fotografiaBase64: string | undefined = undefined;
  // Emiter para notificar al padre el SRC de la fotografía cuándo cambia
  @Output() fotografiaBase64Change = new EventEmitter<string>();

  constructor() {
    addIcons({
      cameraOutline
    });
  }

  ngOnInit() {}

  get fotografiaSRC(): string {
    // Retorna el SRC de la fotografía para ser usado en ion-img
    // si es undefined retornará el placeholder, sino retornará el base64 con el prefijo
    if (this.fotografiaBase64){
      return `data:image/jpeg;base64, ${this.fotografiaBase64}`;
    }else{
      return "assets/fotografia-placeholder.png";
    }
  }

  async capturarFotografia() {
    // Se llama al método getPhoto del plugin de camara para capturar
    // una imágen en formato base64
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
    // Si la imágen no se captura, se retorna
    if (image.base64String === undefined || image.base64String === null) {
      return;
    }
    // Almacenar la imágen capturada (base64)
    this.fotografiaBase64 = image.base64String;
    // Emitir el cambio al padre
    this.fotografiaBase64Change.emit(this.fotografiaBase64);
  }

}
