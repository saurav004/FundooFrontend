import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';


const routes: Routes = [
    // { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'register', component:  RegisterComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'forgot_password', component: ForgotPasswordComponent},
    { path:"resetpassword/:token", component:SetPasswordComponent},
    { path:"dashboard", component:DashboardComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }