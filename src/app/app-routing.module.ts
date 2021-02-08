import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditLabelsComponent } from './components/editLabels/editLabels.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotesOfCertainLabelComponent } from './components/notesOfCertainLabel/notesOfCertainLabel.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SearchComponent } from './components/search/search.component';
import { SetPasswordComponent } from './components/setPassword/set-password.component';
import { TrashComponent } from './components/trash/trash.component';
import { ViewNoteComponent } from './components/viewNote/ViewNote.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot_password', component: ForgotPasswordComponent },
  { path: "resetpassword/:token", component: SetPasswordComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: 'home', component: ViewNoteComponent },
      { path: 'reminder', component: RemindersComponent },
      { path: 'archive', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'search', component: SearchComponent },
      { path: 'label/:name', component: NotesOfCertainLabelComponent },
      { path: 'edit_label', component: EditLabelsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }