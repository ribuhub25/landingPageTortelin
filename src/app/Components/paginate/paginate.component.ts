import { Component, Input, Output } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.scss',
})
export class PaginateComponent {
  @Input({ required: true }) length: number = 0;
  @Input({ required: true }) pageSize: number = 0;
}
