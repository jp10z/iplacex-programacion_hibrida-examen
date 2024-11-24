import { Component, OnInit } from '@angular/core';
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
    IonIcon
  ]
})
export class FotografiaComponent  implements OnInit {

  fotografiaSRC: string = "assets/imagen-placeholder.svg";

  constructor() {
    addIcons({
      cameraOutline
    });
  }

  ngOnInit() {}

  async capturarFotografia() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    if (image.base64String === undefined) {
      return;
    }
    this.fotografiaSRC = `data:image/jpeg;base64, ${image.base64String}`;
  }

}
