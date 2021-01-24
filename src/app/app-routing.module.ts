import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
    // { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'register', component:  RegisterComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'forgot_password', component: ForgotPasswordComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }