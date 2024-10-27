import { Injectable } from '@angular/core';
import { ITorta } from '../models/torta.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _priceMin: number = 0;
  private _priceMax: number = 0;
  private _tortasFiltered: ITorta[] = [];
  private _categoryId: number = 0;
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
  tortasFilteredObservable$ = new Subject<ITorta[]>();
  priceMinObservable$ = new Subject<number>();
  priceMaxObservable$ = new Subject<number>();

  get getPriceMin() {
    return this._priceMin;
  }
  get getPriceMax() {
    return this._priceMax;
  }
  get getTortasFiltered() {
    return this._tortasFiltered;
  }
  calculatePrices(categoryId: number) {
    this._categoryId = categoryId;
    var tortas = this.dataTorta.filter((t) => {
      return t.categoryId === categoryId;
    });
    if (tortas.length == 0) {
      this._priceMin = 0;
      this._priceMax = 0;
    } else {
      var prices = tortas.map((t) => t.price);
      this._priceMin = Math.min(...prices);
      this._priceMax = Math.max(...prices);
    }
    this.priceMinObservable$.next(this._priceMin);
    this.priceMaxObservable$.next(this._priceMax);
  }
  filterTortasByPrice(pMax: number, pMin:number) {
    var tortasfiltered = this.dataTorta.filter((t) => {
      return t.price >= pMin && t.price <= pMax && t.categoryId == this._categoryId;
    });
    if (tortasfiltered.length == 0) {
      this._tortasFiltered = this.dataTorta;
    } else {
      this._tortasFiltered = tortasfiltered;
    }
    console.log(tortasfiltered);
    this.tortasFilteredObservable$.next(this._tortasFiltered);
  }
}

