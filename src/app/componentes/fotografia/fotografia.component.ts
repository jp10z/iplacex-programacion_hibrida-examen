import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonImg, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonImg, 
    IonButton,
    IonIcon
  ]
})
export class FotografiaComponent  implements OnInit {

  constructor() {
    addIcons({
      cameraOutline
    });
  }

  ngOnInit() {}

}
