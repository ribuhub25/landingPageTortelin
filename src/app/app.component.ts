import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardComponent,
    RouterLink,
    MatButtonModule,
    MatIcon,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'trelloApp';
  type: string = '';
  typeOutput: string = '';
  data = [
    {
      id: 1,
      title: 'Abomination',
      description: 'Hooooo!',
      type: 'Normal',
    },
    {
      id: 2,
      title: 'The Collector',
      description: 'adadadada!',
      type: 'Magician',
    },
    {
      id: 3,
      title: 'Bestia',
      description: 'Hoooooasas!',
      type: 'Reveal',
    },
    {
      id: 4,
      title: 'Gargamel',
      description: 'Hoooooasass!',
      type: 'Floaar',
    },
  ];
  printType(type: string) {
    this.type = type;
  }
  printTypeOutput(type: string) {
    this.typeOutput = type;
  }
}
