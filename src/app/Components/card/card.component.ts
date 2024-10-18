import { ChangeDetectionStrategy,Component, EventEmitter, Input, OnInit,SimpleChanges, Output, output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';
import { ITorta } from '../../models/torta.interface';

@Component({
  selector: 'snap-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() id = 0;
  @Input() description = '';
  @Input({ transform: upperText }) type = '';
  @Input() categoryName = '';

  @Output() childEmitter = new EventEmitter<string>();
  childEmitterFromOutput = output<string>();
  cardEmitter = output<number>();
  isValid = false;

  handleSubmit(e: number) {
    alert(`se seleccionó el ID: ${e}`);
  }
  ngOnInit(): void {
    this.childEmitter.emit(`${this.type},${this.id}`);
    this.childEmitterFromOutput.emit(`${this.type},${this.id}`);
  }

  //BUTTON CARRITO
  private readonly _cartService = inject(CartService);
  @Input({ required: true }) torta?: ITorta;
  clickAddToCard(): void {
    this._cartService.addToCard(this.torta!);
    console.log(this.torta);
  }
}

function upperText(text: string | undefined) {
  return text?.toUpperCase() ?? '';
}
