import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CategoriesComponent } from './content/categories/categories.component';
import { ProductsDetailComponent } from './content/products-detail/products-detail.component';
import { TortaDetailComponent } from './torta-detail/torta-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'catalago', component: CatalogoComponent },

  // { path: 'catalago/:category', component: CategoriesComponent },
  // { path: 'catalogo/:category/:torta', component: TortaDetailComponent },
];
