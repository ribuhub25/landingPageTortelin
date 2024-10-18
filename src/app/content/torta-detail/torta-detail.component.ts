import { Component, Input, OnInit } from '@angular/core';
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
  ],
  templateUrl: './torta-detail.component.html',
  styleUrl: './torta-detail.component.scss',
})
export default class TortaDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  displayedColumns: string[] = ['porciones', 'tamanio'];
  dataSource = ELEMENT_DATA;
  @Input() price: number = 0;
  @Input() image: string = '';
  // @Input() lblTorta: string = '';
  // @Input() txtDesTorta: string = '';
  // lblCategory: string = '';

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
  categoryStrId: string | null = '';
  categoryStr: number = 0;
  tortaStrId: string | null = '';
  lblCategory: string = '';
  txtDesCategory: string = '';
  lblTorta: string = '';
  tortaId: number | null = null;
  tortaDetail: ITorta | null = null;

  onGetTortasByCategory(categoryId: number) {
    this.tortasByCategory = this.dataTorta.filter((t) => {
      return t.categoryId === categoryId;
    });
    //Guarda el valor de categoryId,sirve para luego verificar si hay algun cambio a otra categoryId
    this.categoryId = categoryId;
    this.lblTorta = '';
    this.lblCategory = this.dataCategoria.find((c) => {
      return c.id == categoryId;
    })!.name;
    this.txtDesCategory = this.dataCategoria.find((c) => {
      return c.id == categoryId;
    })!.description;
  }
  onGetTortaDetail(tortaId: number | null) {
    this.tortaDetail = this.dataTorta.find((t) => {
      return t.id == tortaId;
    })!;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryStrId = this.route.snapshot.paramMap.get('category');
    this.tortaStrId = this.route.snapshot.paramMap.get('torta');
    this.lblCategory = this.categoryStrId!.split('-').join(' ');
    this.lblTorta = this.tortaStrId!.split('-').join(' ');
    this.categoryStr = this.dataCategoria.find((c) => {
      return c.name.split(' ').join('-').toLowerCase() == this.categoryStrId;
    })!.id;

    this.tortaDetail = this.dataTorta.find((t) => {
      return t.name.split(' ').join('-').toLowerCase() == this.tortaStrId;
    })!;
    this.tortasByCategory = this.dataTorta.filter((t) => {
      return t.categoryId == this.categoryStr;
    });
  }
}

