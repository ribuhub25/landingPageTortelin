import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-filter-price',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, CurrencyPipe],
  templateUrl: './filter-price.component.html',
  styleUrl: './filter-price.component.scss',
})
export class FilterPriceComponent {
  @Input({ required: true }) priceMin: number = 0;
  @Input({ required: true }) priceMax: number = 0;
  priceVarMax: number = this.priceMax;
  priceVarMin: number = this.priceMin;

}
