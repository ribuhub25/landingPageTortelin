import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./Pages/home/home.component') },
  { path: 'catalogo', loadChildren: () => import('./Pages/catalogo/catalogo.routes') }

];
