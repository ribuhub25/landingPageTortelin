import { Component, inject, Input, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../Services/category.service';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  isActive = '';
  @Input() category: string = '';
  @Input() torta: string = '';
  @Input() categoryId: number = 0;
  private readonly _categoryService = inject(CategoryService);
  onGetCategoriesById() {
    this._categoryService.GetTortasByCategory(this.categoryId);
  }

  ngOnInit(): void {
    if (this.category == '') {
      this.isActive = 'active';
    }
    if (this.torta == '') {
      this.isActive = 'active';
    }
  }
}
