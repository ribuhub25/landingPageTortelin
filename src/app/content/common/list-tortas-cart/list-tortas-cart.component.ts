import { Component, inject, Input, OnInit } from '@angular/core';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CartService } from '../../../Services/cart.service';
import { ITortaDetail } from '../../../Services/models/cart.interface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TotalComponent } from "../total/total.component";

@Component({
  selector: 'app-list-tortas-cart',
  standalone: true,
  imports: [MatSidenavModule, MatListItem, MatListModule, AsyncPipe, CommonModule, MatButtonModule, TotalComponent],
  templateUrl: './list-tortas-cart.component.html',
  styleUrl: './list-tortas-cart.component.scss',
})
export class ListTortasCartComponent implements OnInit {
  private readonly _cartService = inject(CartService);
  @Input() tortasSeleccionados: ITortaDetail[] = [];
  @Input() count = 0;

  ngOnInit(): void {
    //SERVICIO
    this._cartService.tortasObservable$.subscribe({
      next: (tortaDetail) => {
        this.tortasSeleccionados = tortaDetail;
        console.log(tortaDetail);
      },
    });
    //ACTUALIZAR CARRITO
    this._cartService.cartObservable$.subscribe({
      next: (number) => {
        this.count = number;
        console.log(this.count);
      },
    });
    this.count = this._cartService.getCountProducts;
  }


  onClickAdd(torta: ITortaDetail) {
    this._cartService.addProductfromButton(torta);
  }
  onClickDelete(index: number) {
    this._cartService.deleteProduct(index);
  }
  onClickReset(torta: ITortaDetail) {
    this._cartService.resetProduct(torta);
  }
  onClickClear() {
    //this._cartService.productsObservable$.unsubscribe();
    this._cartService.clearAll();
  }
}
