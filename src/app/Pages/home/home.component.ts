import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../Components/nav-bar/nav-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListTortasCartComponent } from '../../content/common/list-tortas-cart/list-tortas-cart.component';
import { CartService } from '../../Services/cart.service';
import { ITortaDetail } from '../../Services/models/cart.interface';
import { CardComponent } from '../../Components/card/card.component';
import { ITorta } from '../../models/torta.interface';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NavBarComponent,
    MatSidenavModule,
    ListTortasCartComponent,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  private readonly _categoryService = inject(CategoryService);
  count: number = 0;
  tortasCarrito: ITortaDetail[] = [];
  tortasTop5: ITorta[] = [];
  categoryname: string = '';
  onGetTortaDetail(tortaId: number | null) {
    this._categoryService.GetDetailOfTorta(tortaId);
  }
  GetCategoryName(id:number) {
    var nameC = this._categoryService.dataCategoria.filter(c => {
      return c.id === id
    });
    return nameC[0].name;
  }
  ngOnInit(): void {
    this.count = this._cartService.getCountProducts;
    this.tortasCarrito = this._cartService.getProducts;
    this.tortasTop5 = this._categoryService.getTortasTop5;
  }
}
