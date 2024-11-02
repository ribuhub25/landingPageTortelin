import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss',
})
export class TotalComponent {
  private readonly _cartService = inject(CartService);

  total: number = 0;
  ngOnInit(): void {
    //TRAYENDO VALOR DEL TOTAL DESDE EL SERVICIO PARA ACTUALIZAR CONFORME SE VAYA AGREGANDO/ELIMINANDO
    this._cartService.totalObservable$.subscribe({
      next: (number) => {
        this.total = number;
      },
    });
    //USANDO LOCALSTORAGE PARA TRAER EL VALOR DE TOTAL AL INICIO
    this.total = parseFloat(localStorage.getItem("total")!);
  }

}
