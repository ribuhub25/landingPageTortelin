import {
  Component,
  ElementRef,
  inject,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDrawer } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIcon, MatBadgeModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  constructor(private route: ActivatedRoute) {}
  // myCallbackFunction = (): void => {
  //   alert('hola');
  // };
  //SERVICIO
  private readonly _cartService = inject(CartService);
  @Input() count = 0;
  isActive = false;
  path: string | undefined = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.path = this.route.snapshot.parent?.routeConfig?.path;
    if (this.path) {
      this.isActive = true;
    }

    //ACTUALIZAR CARRITO
    this._cartService.cartObservable$.subscribe({
      next: (number) => {
        this.count = number;
      },
    });
  }

  //CONFIGURACIÓN PARA EL BOTON CARRITO DE COMPRAS
  @Input({ required: true }) drawer!: MatDrawer;
  @Input() drawer2!: MatDrawer;
  ToggleCart() {
    this.drawer.toggle();
    if (this.drawer.opened) {
      this.drawer2.close();
    } else {
      this.drawer2.open();
    }
  }
}
