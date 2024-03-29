// app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginComponent} from "./pages/login/login.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {UserProfileComponent} from "./pages/user-profile/user-profile.component";
import {AdminPanelComponent} from "./pages/admin-panel/admin-panel.component";
import {WebdevcourseComponent} from "./courses/webdevcourse/webdevcourse.component";
import {PythonfundcourseComponent} from "./courses/pythonfundcourse/pythonfundcourse.component";
import {MachinebasicsComponent} from "./courses/machinebasics/machinebasics.component";
import {DataintroComponent} from "./courses/dataintro/dataintro.component";
import {CybersecbasicsComponent} from "./courses/cybersecbasics/cybersecbasics.component";
import {UnitygamedesignComponent} from "./courses/unitygamedesign/unitygamedesign.component";
import {PythondataanalysisComponent} from "./courses/pythondataanalysis/pythondataanalysis.component";
import {ThreatdetecttechniquesComponent} from "./courses/threatdetecttechniques/threatdetecttechniques.component";
import {ResponsivewebdesignComponent} from "./courses/responsivewebdesign/responsivewebdesign.component";
import {AndroidappfundamentalsComponent} from "./courses/androidappfundamentals/androidappfundamentals.component";
import {DatavisualizationComponent} from "./courses/datavisualization/datavisualization.component";
import {IosappdevelopmentComponent} from "./courses/iosappdevelopment/iosappdevelopment.component";



// Define your routes
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'courses/web-dev-basics', component: WebdevcourseComponent},
  { path: 'courses/data-analysis-introduction', component: DataintroComponent},
  { path: 'courses/python-fundamentals', component: PythonfundcourseComponent},
  { path: 'courses/machine-learning-basics', component: MachinebasicsComponent},
  { path: 'courses/cybersecurity-basics', component: CybersecbasicsComponent},
  { path: 'courses/unity-game-design', component: UnitygamedesignComponent},
  { path: 'courses/python-data-analysis', component: PythondataanalysisComponent},
  { path: 'courses/threat-detection-techniques', component: ThreatdetecttechniquesComponent},
  { path: 'courses/responsive-web-design', component: ResponsivewebdesignComponent},
  { path: 'courses/android-app-fundamentals', component: AndroidappfundamentalsComponent},
  { path: 'courses/ios-app-development', component: IosappdevelopmentComponent},
  { path: 'courses/data-visualization', component: DatavisualizationComponent},
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: '**', redirectTo: 'not-found' }, // Wildcard route for 404 Not Found
  { path: 'not-found', component: NotFoundComponent } // Route for NotFoundComponent
];
