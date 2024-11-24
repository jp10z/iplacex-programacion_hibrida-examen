import { Routes } from '@angular/router';

export const routes: Routes = [
  // Si se ingresar a la raíz de la aplicación, se redirige a la página de publicaciones
  {
    path: '',
    redirectTo: 'publicaciones',
    pathMatch: 'full',
  },
  // Página de publicaciones
  {
    path: 'publicaciones',
    loadComponent: () => import('./paginas/publicaciones/publicaciones.page').then( m => m.PublicacionesPage)
  },
  // Página para crear publicación
  {
    path: 'crear-publicacion',
    loadComponent: () => import('./paginas/crear-publicacion/crear-publicacion.page').then( m => m.CrearPublicacionPage)
  },
];