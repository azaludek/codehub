// app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {CoursePageComponent} from "./pages/course-page/course-page.component";

// Define your routes
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'course-page', component: CoursePageComponent },
  { path: '**', redirectTo: 'not-found' }, // Wildcard route for 404 Not Found
  { path: 'not-found', component: NotFoundComponent } // Route for NotFoundComponent
];
