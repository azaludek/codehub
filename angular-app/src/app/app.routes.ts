// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";

// Define your routes
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];
