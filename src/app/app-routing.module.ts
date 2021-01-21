import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    // { path: '', redirectTo:'login', pathMatch:'full'},
    { path: 'register', component:  RegisterComponent},
    { path: 'login', component:  LoginComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }