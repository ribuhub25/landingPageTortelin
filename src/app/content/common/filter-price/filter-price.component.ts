import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { FilterService } from '../../../Services/filter.service';
@Component({
  selector: 'app-filter-price',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, CurrencyPipe],
  templateUrl: './filter-price.component.html',
  styleUrl: './filter-price.component.scss',
})
export class FilterPriceComponent {
  private readonly _filterService = inject(FilterService);
  @ViewChild("btnFilter") btnFilter: ElementRef | undefined;
  @Input({ required: true }) priceMin: number = 0;
  @Input({ required: true }) priceMax: number = 0;
  priceVarMax: number = 0;
  priceVarMin: number = 0;
  FilterTortas(pMax: number, pMin: number) {
    this._filterService.filterTortasByPrice(pMax, pMin);
  }
  ngOnInit(): void {
    this._filterService.priceMaxObservable$.subscribe({
      next: (priceMax) => {
        this.priceVarMax = priceMax;
      },
    });
    this._filterService.priceMinObservable$.subscribe({
      next: (priceMin) => {
        this.priceVarMin = priceMin;
      },
    });
    this.priceMax = this._filterService.getPriceMax;
    this.priceMin = this._filterService.getPriceMin;
    this.priceVarMax = this.priceMax;
    this.priceVarMin = this.priceMin;
    console.log(this.priceMax, this.priceMin);
  }
}
