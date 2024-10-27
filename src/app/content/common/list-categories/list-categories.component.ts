import { Component, inject, Input, ViewChild } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ICategoria } from '../../../models/categoria.interface';
import { ITorta } from '../../../models/torta.interface';
import { CategoryService } from '../../../Services/category.service';
import { CheckIconComponent } from '../../../Components/icon/icon.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FilterPriceComponent } from '../filter-price/filter-price.component';
import { FilterService } from '../../../Services/filter.service';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink,
    CheckIconComponent,
    CommonModule,
    FilterPriceComponent,
  ],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent {
  constructor(private route: ActivatedRoute) {}
  private readonly _categoryService = inject(CategoryService);
  private readonly _filterService = inject(FilterService);
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
  @Input({ required: false }) tortasByCategory: ITorta[] = [];
  @Input({ required: true }) categoryId: number | null = null;
  @Input({ required: true }) tortaId: number | null = null;
  @Input() isCheked: boolean = true;
  @Input() categorySelected: string = '';
  priceMin: number = 0;
  priceMax: number = 0;
  @ViewChild(FilterPriceComponent) btnFilter:FilterPriceComponent
  | undefined;

  onGetTortasByCategory(categoryId: number) {
    this._filterService.calculatePrices(categoryId);
    //TRAER LOS VALORES DE LOS PRECIOS PARA EL FILTER
    this.priceMax = this._filterService.getPriceMax;
    this.priceMin = this._filterService.getPriceMin;
    //TRAER LAS TORTAS POR CATEGORIA
    this._categoryService.GetTortasByCategory(categoryId);
  }
  onGetTortaDetail(tortaId: number | null) {
    this._categoryService.GetDetailOfTorta(tortaId);
  }

  ngOnInit(): void {
    this._categoryService.tortasCategoryObservable$.subscribe({
      next: (tortas) => {
        this.tortasByCategory = tortas;
        // var prices = tortas.map((t) => t.price);
        // this.priceMin = Math.min(...prices);
        // this.priceMax = Math.max(...prices);
      },
    });
    this._categoryService.categorySelectedObservable$.subscribe({
      next: (categoryId) => {
        this.categoryId = categoryId;
      },
    });
    this._categoryService.tortaSelectedObservable$.subscribe({
      next: (tortaId) => {
        this.tortaId = tortaId;
      },
    });
    //SELECCIONAR EL PRIMER VALOR QUE SE SELECCIONE PARA MOSTRAR EL ICONO
    this.categorySelected = this.route.snapshot.paramMap.get('category')!;
    this.isCheked = false;
    this.tortasByCategory = this._categoryService.getTortasByCategory;
  }
}
