import { Component, ElementRef, OnInit,ViewChild,inject } from '@angular/core';
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
    MatBadgeModule
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export default class CatalogoComponent implements OnInit {
  dataCategoria: ICategoria[] = [
    {
      id: 1,
      name: 'Chocotones',
      description:
        'Experiencia y conocimiento en el rubro de la pastelería, con la especialidad en tortas para todas ocación.',
    },
    {
      id: 2,
      name: 'Tortas de Keke de chocolate',
      description:
        'Experiencia y conocimiento en el rubro de la pastelería, con la especialidad en tortas para todas ocación.',
    },
    {
      id: 3,
      name: 'Tortas de Keke de vainilla',
      description:
        'Experiencia y conocimiento en el rubro de la pastelería, con la especialidad en tortas para todas ocación.',
    },
    {
      id: 4,
      name: 'Tortas de Keke de fresa y otros',
      description:
        'Experiencia y conocimiento en el rubro de la pastelería, con la especialidad en tortas para todas ocación.',
    },
    {
      id: 5,
      name: 'Tortas de Biscochuelo',
      description:
        'Experiencia y conocimiento en el rubro de la pastelería, con la especialidad en tortas para todas ocación.',
    },
  ];
  dataTorta: ITorta[] = [
    {
      id: 1,
      name: 'Tres leches de chocolate',
      img: 'asset/tres_leches_chocolate.jpg',
      price: 42,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 2,
      name: 'Torta de Chocolate',
      img: 'asset/torta_chocolate.jpg',
      price: 38,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 3,
      name: 'Torta Lucuma',
      img: 'asset/torta_lucuma.jpg',
      price: 40,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 4,
      name: 'Torta Moka',
      img: 'asset/torta_moka.jpg',
      price: 38,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 5,
      name: 'Torta Selva Blanca',
      img: 'asset/selva_negra2.jpg',
      price: 42,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 6,
      name: 'Torta de Sandia',
      img: 'asset/sauco.jpg',
      price: 38,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 7,
      name: 'Torta Selva Negra',
      img: 'asset/selva_negra.jpg',
      price: 42,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 8,
      name: 'Torta Tres Leches de Moka',
      img: 'asset/tres_leches_moka.jpg',
      price: 42,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 9,
      name: 'Torta de Sauco',
      img: 'asset/sauco.jpg',
      price: 38,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 10,
      name: 'Torta Tres Leches de Lúcuma',
      img: 'asset/tres_leches_lucuma.jpg',
      price: 42,
      status: 1,
      categoryId: 2,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 11,
      name: 'Torta de Albaricoque',
      img: 'asset/tres_leches_lucuma.jpg',
      price: 38,
      status: 1,
      categoryId: 3,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 12,
      name: 'Torta de Coco',
      img: 'asset/tres_leches_lucuma.jpg',
      price: 38,
      status: 1,
      categoryId: 3,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
    {
      id: 13,
      name: 'Torta de Mango',
      img: 'asset/tres_leches_lucuma.jpg',
      price: 40,
      status: 1,
      categoryId: 3,
      description:
        'Suave bizcocho de chocolate húmedo, bañado en dulcerío de tres leches y cubierto con chantilly de chocolate',
    },
  ];
  tortasByCategory: ITorta[] = [];
  categoryId: number | null = null;
  isClosed: boolean = false;
  lblCategory: string = '';
  txtDesCategory: string = '';
  lblTorta: string = '';
  txtDesTorta: string = '';
  txtPriceTorta: number = 0;
  txtImageTorta: string = '';
  isClosedDetail: boolean = false;
  tortaId: number | null = null;

  onGetTortasByCategory(categoryId: number) {
    // if (this.isClosed && this.categoryId == categoryId) {
    //   this.isClosed = false;
    // } else {
    //   this.isClosed = true;
    // }
    this.tortasByCategory = this.dataTorta.filter((t) => {
      return t.categoryId === categoryId;
    });
    //Guarda el valor de categoryId,sirve para luego verificar si hay algun cambio a otra categoryId
    this.categoryId = categoryId;
    if (this.isClosed) {
      this.lblTorta = '';
      this.lblCategory = this.dataCategoria.find((c) => {
        return c.id == categoryId;
      })!.name;
      this.txtDesCategory = this.dataCategoria.find((c) => {
        return c.id == categoryId;
      })!.description;
    } else {
      this.lblCategory = '';
      this.txtDesCategory = '';
    }
    console.log(this.tortasByCategory);
  }
  onGetTortaDetail(tortaId: number | null) {
    if (this.isClosedDetail && this.tortaId == tortaId) {
      this.isClosedDetail = false;
    } else {
      this.isClosedDetail = true;
    }
    //Guarda el valor de tortaId,sirve para luego verificar si hay algun cambio a otra tortaId
    this.tortaId = tortaId;
    if (tortaId) {
      this.lblTorta = this.dataTorta.find((t) => {
        return t.id == tortaId;
      })!.name;
      this.txtDesTorta = this.dataTorta.find((t) => {
        return t.id == tortaId;
      })!.description;
      this.txtPriceTorta = this.dataTorta.find((t) => {
        return t.id == tortaId;
      })!.price;
      this.txtImageTorta = this.dataTorta.find((t) => {
        return t.id == tortaId;
      })!.img;
    } else {
      this.lblTorta = '';
    }
  }

  //SERVICIO
  private readonly _cartService = inject(CartService);

  count = 0;
  tortasSeleccionados: ITortaDetail[] = [];

  ngOnInit(): void {
    this._cartService.cartObservable$.subscribe({
      next: (number) => {
        this.count = number;
      },
    });
    this._cartService.tortasObservable$.subscribe({
      next: (tortaDetail) => {
        this.tortasSeleccionados = tortaDetail;
        console.log(tortaDetail);
      },
    });
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
  //CAPTURANDO EL ELEMENTO DRAWER

}
