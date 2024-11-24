import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  // Recibe el base64 de la fotografía desde el padre
  @Input() fotografiaBase64: string | undefined = undefined;
  // Emiter para notificar al padre el SRC de la fotografía cuándo se toma una nueva
  @Output() fotografiaBase64Change = new EventEmitter<string>();

  constructor() {
    addIcons({
      cameraOutline
    });
  }

  ngOnInit() {}

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
    // Emitir el nuevo base64 al padre
    this.fotografiaBase64Change.emit(image.base64String);
  }

}
