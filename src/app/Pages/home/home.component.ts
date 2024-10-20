import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../Components/nav-bar/nav-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { ListTortasCartComponent } from '../../content/common/list-tortas-cart/list-tortas-cart.component';
import { CartService } from '../../Services/cart.service';
import { ITortaDetail } from '../../Services/models/cart.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NavBarComponent,
    MatSidenavModule,
    ListTortasCartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  count = 0;
  tortasCarrito: ITortaDetail[] = [];
  ngOnInit(): void {
    this.count = this._cartService.getCountProducts;
    this.tortasCarrito = this._cartService.getProducts;
  }
}
