import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalogo.component'),
  },
  {
    path: ':category',
    loadComponent: () => import('../content/categories/categories.component'),
  },
  {
    path: ':category/:torta',
    loadComponent: () => import('../torta-detail/torta-detail.component'),
  },
];

export default routes;
