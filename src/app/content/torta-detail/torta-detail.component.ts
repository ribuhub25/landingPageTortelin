import { Component, inject, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../Components/breadcrumb/breadcrumb.component';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ITorta } from '../../models/torta.interface';
import { ICategoria } from '../../models/categoria.interface';
import { ActivatedRoute } from '@angular/router';
import { NavBarComponent } from '../../Components/nav-bar/nav-bar.component';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListTortasCartComponent } from '../common/list-tortas-cart/list-tortas-cart.component';
import { ITortaDetail } from '../../Services/models/cart.interface';
import { CartService } from '../../Services/cart.service';
import { ListCategoriesComponent } from '../common/list-categories/list-categories.component';
import { CategoryService } from '../../Services/category.service';

export interface TableElements{
  porciones: string;
  tamanio: string;
}
const ELEMENT_DATA: TableElements[] = [
  { porciones: "8-10", tamanio: 'Pequeña' },
  { porciones: "15-18", tamanio: 'Mediana' },
  { porciones: "20-22", tamanio: 'Grande' },
];
@Component({
  selector: 'app-torta-detail',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatSidenavModule,
    BreadcrumbComponent,
    RouterOutlet,
    RouterLink,
    MatListModule,
    NavBarComponent,
    MatIcon,
    MatButtonModule,
    ListTortasCartComponent,
    ListCategoriesComponent,
  ],
  templateUrl: './torta-detail.component.html',
  styleUrl: './torta-detail.component.scss',
})
export default class TortaDetailComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  private readonly _categoryService = inject(CategoryService);

  displayedColumns: string[] = ['porciones', 'tamanio'];
  dataSource = ELEMENT_DATA;
  @Input() price: number = 0;
  @Input() image: string = '';

  tortasByCategory: ITorta[] = [];
  categoryId: number | null = null;
  tortaId: number | null = null;
  tortaDetail: ITorta | null = null;
  tortaBreadCrumb: string = "";
  categoryBreadCrumb: string = "";
  count:number = 0;
  tortasCarrito: ITortaDetail[] = [];

  onGetTortaDetail(tortaId: number | null) {
    this._categoryService.GetDetailOfTorta(tortaId);
  }

  ngOnInit(): void {
    //ACTUALIZAR EL LISTADO DE CATEGORIAS
    this._categoryService.tortasCategoryObservable$.subscribe({
      next: (tortas) => {
        this.tortasByCategory = tortas;
        console.log(this.tortasByCategory);
      },
    });
    //TRAER EL DETALLE DE LAS TORTAS
    this._categoryService.tortaDetailObservable$.subscribe({
      next: (tortaDetail) => {
        this.tortaDetail = tortaDetail;
      },
    });
    //ACTUALIZAR EL TORTA_BREADCRUMB
    this._categoryService.tortaBreadCrumbObservable$.subscribe({
      next: (tortaName) => {
        this.tortaBreadCrumb = tortaName;
        console.log(tortaName);
      },
    });
    //ACTUALIZAR EL CATEGORY_BREADCRUMB
    this._categoryService.categoryBreadCrumbObservable$.subscribe({
      next: (categoryName) => {
        this.categoryBreadCrumb = categoryName;
        console.log(categoryName);
      },
    });
    //CARGAR AL INICIO LOS VALORES DE...
    this.categoryId = this._categoryService.getCategoryId;
    this.tortaId = this._categoryService.getTortaId;
    this.tortaDetail = this._categoryService.getTortaDetail;
    this.categoryBreadCrumb = this._categoryService.getCategoryName;
    this.tortaBreadCrumb = this._categoryService.getTortaName;
    //ACTUALIZAR EL CONTADOR DEL CARRITO Y TRAER LOS PRODUCTOS ASOCIADOS
    this.count = this._cartService.getCountProducts;
    this.tortasCarrito = this._cartService.getProducts;
  }
}

