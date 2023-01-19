import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAuthComponent } from './auth/admin-auth/admin-auth.component';
import { EmployeeAuthComponent } from './auth/employee-auth/employee-auth.component';
import { EmployeeSignupComponent } from './auth/employee-signup/employee-signup.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'admin-auth',pathMatch:'full'},
  {path:'admin-auth',component:AdminAuthComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'employee-auth',component:EmployeeAuthComponent},
  {path:'employee-signup',component:EmployeeSignupComponent},
  {path:'employee-dashboard',component:EmployeeDashboardComponent},
  {path:'employee-profile',component:EmployeeProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
