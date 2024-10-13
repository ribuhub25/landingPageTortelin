import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})

export class BreadcrumbComponent implements OnInit{
  isActive = "";
  @Input() category: string = "";
  @Input() torta: string = "";

  ngOnInit(): void {
    if (this.category == '') {
      this.isActive = 'active';
    }
    if (this.torta == '') {
      this.isActive = 'active';
    }
  }
}
