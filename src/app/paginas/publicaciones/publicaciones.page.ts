import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFabButton, IonFab, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class PublicacionesPage implements OnInit {

  constructor() {
    addIcons({
      add
    });
  }

  ngOnInit() {
  }

}
