import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthButtonComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { EventPageComponent } from './event-page/event-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path:"dashboard", component: DashboardComponent},
  { path: 'event-page/:id', component: EventPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }