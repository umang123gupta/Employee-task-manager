import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminAuthComponent } from './auth/admin-auth/admin-auth.component';
import { EmployeeAuthComponent } from './auth/employee-auth/employee-auth.component';
import { EmployeeSignupComponent } from './auth/employee-signup/employee-signup.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    EmployeeDashboardComponent,
    AdminAuthComponent,
    EmployeeAuthComponent,
    EmployeeSignupComponent,
    EmployeeProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
