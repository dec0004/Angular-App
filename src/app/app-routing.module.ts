import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import { DisplayUsersComponent } from './display-users/display-users.component';

const routes: Routes = [
  {path: 'home', component: EmployeeComponent},
  {path: 'display', component: DisplayUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [EmployeeComponent,DisplayUsersComponent];
