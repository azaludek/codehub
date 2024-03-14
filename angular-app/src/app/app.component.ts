import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, FooterComponent, SignupComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
    isShoppingCartRoute: boolean = false;
  constructor(private router: Router) {
    // Subscribe to router events to track route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is 'shopping-cart'
        this.isShoppingCartRoute = event.url === '/shopping-cart';
      }
    });
  }
  title = 'codehub';

    ngOnInit(): void {
    initFlowbite();
  }
}
