import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITorta } from '../models/torta.interface';
import { ICategoria } from '../models/categoria.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _tortasByCategory: ITorta[] = [];
  private _categoryId: number = 0;
  private _tortaId: number | null = 0;
  private _tortaDetail: ITorta | null = null;
  private _categoryBreadCrumb: string = '';
  private _tortaBreadCrumb: string = '';
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
  tortasCategoryObservable$ = new Subject<ITorta[]>();
  categorySelectedObservable$ = new Subject<number>();
  tortaSelectedObservable$ = new Subject<number>();
  tortaDetailObservable$ = new Subject<ITorta>();
  categoryBreadCrumbObservable$ = new Subject<string>();
  tortaBreadCrumbObservable$ = new Subject<string>();

  get getTortasByCategory() {
    return this._tortasByCategory;
  }
  get getCategoryId() {
    return this._categoryId;
  }
  get getTortaId() {
    return this._categoryId;
  }
  get getTortaDetail() {
    return this._tortaDetail;
  }
  get getCategoryName() {
    return this._categoryBreadCrumb;
  }
  get getTortaName() {
    return this._tortaBreadCrumb;
  }
  GetTortasByCategory(categoryId: number) {
    //Busqueda de las tortas según el categoryId
    this._tortasByCategory = this.dataTorta.filter((t) => {
      return t.categoryId === categoryId;
    });
    this._categoryId = categoryId;

    //NOMBRE DEL CATEGORY PARA EL BREADCRUMB
    this._categoryBreadCrumb = this.dataCategoria.find((c) => {
      return c.id == categoryId;
    })!.name;

    this.categoryBreadCrumbObservable$.next(this._categoryBreadCrumb);
    this.categorySelectedObservable$.next(this._categoryId);
    this.tortasCategoryObservable$.next(this._tortasByCategory);
  }
  GetDetailOfTorta(tortaId: number | null) {
    this._tortaId = tortaId;

    this._tortaDetail = this.dataTorta.find((t) => {
      return t.id == tortaId;
    })!;

    this._tortaBreadCrumb = this.dataTorta.find((c) => {
      return c.id == tortaId;
    })!.name;
    this.categoryBreadCrumbObservable$.next(this._categoryBreadCrumb);
    this.tortaBreadCrumbObservable$.next(this._tortaBreadCrumb);
    this.tortaSelectedObservable$.next(this._tortaId!);
    this.tortaDetailObservable$.next(this._tortaDetail);

    // if (this.isClosedDetail && this.tortaId == tortaId) {
    //   this.isClosedDetail = false;
    // } else {
    //   this.isClosedDetail = true;
    // }
    // //Guarda el valor de tortaId,sirve para luego verificar si hay algun cambio a otra tortaId
    // this.tortaId = tortaId;
    // if (tortaId) {
    //   this.lblTorta = this.dataTorta.find((t) => {
    //     return t.id == tortaId;
    //   })!.name;
    //   this.txtDesTorta = this.dataTorta.find((t) => {
    //     return t.id == tortaId;
    //   })!.description;
    //   this.txtPriceTorta = this.dataTorta.find((t) => {
    //     return t.id == tortaId;
    //   })!.price;
    //   this.txtImageTorta = this.dataTorta.find((t) => {
    //     return t.id == tortaId;
    //   })!.img;
    // } else {
    //   this.lblTorta = '';
    // }
  }
}
