import { Component, inject, OnInit } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { ICategoria } from '../../models/categoria.interface';
import { ITorta } from '../../models/torta.interface';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../Components/breadcrumb/breadcrumb.component';
import { CardComponent } from '../../Components/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { CartService } from '../../Services/cart.service';
import { ITortaDetail } from '../../Services/models/cart.interface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { ListTortasCartComponent } from '../common/list-tortas-cart/list-tortas-cart.component';
import { ListCategoriesComponent } from '../common/list-categories/list-categories.component';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    RouterLink,
    BreadcrumbComponent,
    CardComponent,
    RouterOutlet,
    MatIcon,
    MatBadgeModule,
    MatButtonModule,
    NavBarComponent,
    AsyncPipe,
    CommonModule,
    ListTortasCartComponent,
    ListCategoriesComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export default class CategoriesComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  private readonly _categoryService = inject(CategoryService);
  tortasByCategory: ITorta[] = [];
  categoryId: number | null = null;
  tortaId: number | null = null;
  categoryBreadCrumb: string = "";
  count:number = 0;
  tortasCarrito: ITortaDetail[] = [];
  drawer: MatDrawer | null = null;
  drawer2: MatDrawer | null = null;

  onGetTortasByCategory(categoryId: number) {
    this._categoryService.GetTortasByCategory(categoryId);
  }
  onGetTortaDetail(tortaId: number | null) {
    this._categoryService.GetDetailOfTorta(tortaId);
  }
  ngOnInit(): void {
    //ACTUALIZAR LAS TORTAS POR CATEGORIA
    this._categoryService.tortasCategoryObservable$.subscribe({
      next: (tortas) => {
        this.tortasByCategory = tortas;
      },
    });
    //ACTUALIZAR LA CATEGORIA_BREADCRUMB
    this._categoryService.categoryBreadCrumbObservable$.subscribe({
      next: (categoryName) => {
        this.categoryBreadCrumb = categoryName;
      },
    });
    //TRAER AL INICIO LOS VALORES DE...
    this.categoryId = this._categoryService.getCategoryId;
    this.tortaId = this._categoryService.getTortaId;
    this.categoryBreadCrumb = this._categoryService.getCategoryName;
    this.tortasByCategory = this._categoryService.getTortasByCategory;
    //ACTUALIZAR EL CONTADOR DEL CARRITO Y TRAER LOS PRODUCTOS ASOCIADOS
    this.count = this._cartService.getCountProducts;
    this.tortasCarrito = this._cartService.getProducts;
  }
  //FUNCION PARA EL MOSTRAR EL CARRITO DE COMPRAS
  functionShowCart() {
    this.drawer?.toggle();
    this.drawer2?.toggle(false);
  }
}
