import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'publicaciones',
    pathMatch: 'full',
  },
  {
    path: 'publicaciones',
    loadComponent: () => import('./paginas/publicaciones/publicaciones.page').then( m => m.PublicacionesPage)
  },
  {
    path: 'crear-publicacion',
    loadComponent: () => import('./paginas/crear-publicacion/crear-publicacion.page').then( m => m.CrearPublicacionPage)
  },
];