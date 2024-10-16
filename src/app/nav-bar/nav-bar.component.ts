import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIcon],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  myCallbackFunction = (): void => {
    alert("hola");
  };

}
