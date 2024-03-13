import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SignupComponent} from "./pages/signup/signup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingPageComponent, FooterComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codehub';

    ngOnInit(): void {
    initFlowbite();
  }
}

