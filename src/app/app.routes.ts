import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./home/home.component') },
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.routes') }

];
