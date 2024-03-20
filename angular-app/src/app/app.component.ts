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
  isNotMyProfileRoute: boolean = false;
  isNotSignUpRoute: boolean = false;
  isNotFoundRoute: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to track route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/shopping-cart'
        this.isShoppingCartRoute = event.url === '/shopping-cart';
        this.isNotMyProfileRoute = event.url === '/my-profile';
        this.isNotSignUpRoute = event.url === '/signup';
        // Check if the current route is '/not-found'
        this.isNotFoundRoute = event.url === '/not-found';
      }
    });
  }

  ngOnInit(): void {
    // Initialize any necessary components or libraries
    // For example, you can call a function to initialize Flowbite here
    initFlowbite();
  }
}
