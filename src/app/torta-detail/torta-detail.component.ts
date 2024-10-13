import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ITamanioTorta, ITamanio } from '../models/tamanio.interface';
import { CommonModule } from '@angular/common';

export interface TableElements{
  porciones: string;
  tamanio: string;
}
const ELEMENT_DATA: TableElements[] = [
  { porciones: "8-10", tamanio: 'Pequeña' },
  { porciones: "15-18", tamanio: 'Mediana' },
  { porciones: "20-22", tamanio: 'Grande' },
];
@Component({
  selector: 'app-torta-detail',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './torta-detail.component.html',
  styleUrl: './torta-detail.component.scss',
})
export class TortaDetailComponent {
  displayedColumns: string[] = ['porciones', 'tamanio'];
  dataSource = ELEMENT_DATA;
  @Input() price: number = 0;
  @Input() image: string = "";
  @Input() lblTorta: string = "";
  @Input() txtDesTorta: string = "";
}

