// app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {ShoppingCartComponent} from "./pages/shopping-cart/shopping-cart.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";

// Define your routes
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: '**', redirectTo: 'not-found' }, // Wildcard route for 404 Not Found
  { path: 'not-found', component: NotFoundComponent } // Route for NotFoundComponent
];
