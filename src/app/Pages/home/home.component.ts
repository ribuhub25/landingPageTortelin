import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from "../../Components/nav-bar/nav-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavBarComponent, MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
