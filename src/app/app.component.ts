import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./navbar/navbar.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";
import {CardsCarouselsComponent} from "./cards-carousels/cards-carousels.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, SecondPageComponent, CardsCarouselsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codehub';

    ngOnInit(): void {
    initFlowbite();
  }
}

