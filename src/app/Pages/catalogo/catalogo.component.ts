import { Component, ElementRef, Input, OnInit,ViewChild,inject } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult, MatSidenavModule } from '@angular/material/sidenav';
import { ICategoria } from '../../models/categoria.interface';
import { ITorta } from '../../models/torta.interface';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from '../../Components/card/card.component';
import { BreadcrumbComponent } from "../../Components/breadcrumb/breadcrumb.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../Services/cart.service';
import { ITortaDetail } from '../../Services/models/cart.interface';
import { MatBadgeModule } from '@angular/material/badge';
import { ListTortasCartComponent } from '../../content/common/list-tortas-cart/list-tortas-cart.component';
import { CategoryService } from '../../Services/category.service';
import { ListCategoriesComponent } from '../../content/common/list-categories/list-categories.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    CardComponent,
    BreadcrumbComponent,
    RouterOutlet,
    RouterLink,
    NavBarComponent,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    ListTortasCartComponent,
    ListCategoriesComponent,
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export default class CatalogoComponent implements OnInit {
  //SERVICIOS A USAR...
  private readonly _categoryService = inject(CategoryService);
  private readonly _cartService = inject(CartService);
  //VARIABLES...
  tortasByCategory: ITorta[] = [];
  categoryId: number | null = null;
  tortaId: number | null = null;
  count:number = 0;
  tortasSeleccionados: ITortaDetail[] = [];
  //FUNCIONES ONCLICK
  onGetTortasByCategory(categoryId: number) {
    this._categoryService.GetTortasByCategory(categoryId);
  }
  //AL RENDERIZAR EL COMPONENTE AL INICIO..
  ngOnInit(): void {
    //ACTUALIZAR EL CONTADOR DEL CARRITO
    this._cartService.cartObservable$.subscribe({
      next: (number) => {
        this.count = number;
      },
    });
    //ACTUALIZAR LAS TORTAS SELECCIONADAS DEL CARRITO
    this._cartService.tortasObservable$.subscribe({
      next: (tortaDetail) => {
        this.tortasSeleccionados = tortaDetail;
        console.log(tortaDetail);
      },
    });

    //TRAER AL INICIO EL VALOR DEL CONTADOR Y LAS TORTAS SELECCIONADAS... EN EL CARRITO
    this.count = this._cartService.getCountProducts;
    this.tortasSeleccionados = this._cartService.getProducts;
  }
}
