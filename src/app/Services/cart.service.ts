import { Injectable } from '@angular/core';
import { ITortaDetail } from './models/cart.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { ITorta } from '../models/torta.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _tortasDetail: ITortaDetail[] = [];
  private _count = 0;
  private _total = 0;

  cartObservable$ = new Subject<number>();
  tortasObservable$ = new Subject<ITortaDetail[]>();
  totalObservable$ = new BehaviorSubject<number>(0);


  get getCountProducts() {
    return this._count;
  }
  get getProducts() {
    return this._tortasDetail;
  }
  addToCard(torta: ITorta) {
    const idTorta = torta.id;
    const index = this._tortasDetail.findIndex(
      ({ torta }) => torta.id === idTorta
    );

    if (index === -1) {
      this._tortasDetail.push({ torta, count: 1, total: torta.price });
      this.tortasObservable$.next(this._tortasDetail);
      this._updateCount();
      this._updateTotal();
    } else {
      this._updateProduct(index);
    }
  }
  addProductfromButton(torta: ITortaDetail) {
    torta.count = torta.count + 1;
    torta.total = torta.count * torta.torta.price;
    this._updateCount();
    this._updateTotal();
    this.tortasObservable$.next(this._tortasDetail);
  }
  deleteProduct(index: number) {
    for (let i = 0; i < this._tortasDetail.length; i++) {
      if (index === this._tortasDetail[i].torta.id) {
        this._count = this._count - this._tortasDetail[i].count;
        this._tortasDetail.splice(i, 1);
      }
    }
    this._updateTotal();
    this.cartObservable$.next(this._count);
    this.tortasObservable$.next(this._tortasDetail);
  }
  resetProduct(torta: ITortaDetail) {
    let count = torta.count - 1;
    let total = torta.total - 1 * torta.torta.price;
    torta.count = 1;
    torta.total = torta.count * torta.torta.price;
    this._count = this._count - count;
    this._total = this._total - total;
    this.cartObservable$.next(this._count);
    this.tortasObservable$.next(this._tortasDetail);
    this.totalObservable$.next(this._total);
  }
  clearAll() {
    this._tortasDetail = [];
    this._count = 0;
    this._total = 0;
    this.tortasObservable$.next(this._tortasDetail);
    this.cartObservable$.next(this._count);
    this.totalObservable$.next(this._total);
  }
  private _updateProduct(index: number) {
    const tortaDetail = this._tortasDetail[index];
    tortaDetail.count = tortaDetail.count++;
    tortaDetail.total = tortaDetail.count * tortaDetail.torta.price;
    this._updateCount();
    this._updateTotal();
    //Mostrar la data del producto
    this.setCount(index);
    this.setTotal(index);
    console.log(this._tortasDetail);
    this.tortasObservable$.next(this._tortasDetail);
  }
  private setCount(index: number) {
    let newTortasDetail = [...this._tortasDetail];
    newTortasDetail[index] = {
      ...newTortasDetail[index],
      count: newTortasDetail[index].count + 1,
    };
    this._tortasDetail = newTortasDetail;
  }
  private setTotal(index: number) {
    let newTortasDetail = [...this._tortasDetail];
    newTortasDetail[index] = {
      ...newTortasDetail[index],
      total: newTortasDetail[index].count * newTortasDetail[index].torta.price,
    };
    this._tortasDetail = newTortasDetail;
    this._updateTotal();
  }

  private _updateCount() {
    this._count = this._count + 1;
    this.cartObservable$.next(this._count);
  }

  private _updateTotal() {
    let totalProd = 0;
    for (let i = 0; i < this._tortasDetail.length; i++) {
      totalProd =
        totalProd +
        this._tortasDetail[i].torta.price * this._tortasDetail[i].count;
    }
    this._total = totalProd;
    this.totalObservable$.next(this._total);
  }
}
