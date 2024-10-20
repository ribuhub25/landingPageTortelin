import { Component, inject, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { ICategoria } from '../../../models/categoria.interface';
import { ITorta } from '../../../models/torta.interface';
import { CategoryService } from '../../../Services/category.service';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [MatListModule, RouterLink],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss',
})
export class ListCategoriesComponent {
  private readonly _categoryService = inject(CategoryService);
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

  onGetTortasByCategory(categoryId: number) {
    this._categoryService.GetTortasByCategory(categoryId);
  }
  onGetTortaDetail(tortaId: number | null) {
    this._categoryService.GetDetailOfTorta(tortaId);
  }

  ngOnInit(): void {
    this._categoryService.tortasCategoryObservable$.subscribe({
      next: (tortas) => {
        this.tortasByCategory = tortas;
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
    this.tortasByCategory = this._categoryService.getTortasByCategory;
  }
}
