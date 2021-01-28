import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BreakPointRegistry, FlexLayoutModule, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutGapStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatCardModule, MatSidenavModule, MatListModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TitleComponent } from './components/title/title.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginService } from './services/login.service';
import { SetPasswordService } from './services/setPassword.service';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SetPasswordComponent,
    ForgotPasswordComponent,
    AppComponent,
    RegisterComponent,
    LoginComponent,
    TitleComponent,
    
  ],
  imports: [
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatDialogModule 
  ],
  providers: [
    SetPasswordService,
    LoginService,
    UserService,
    PrintHook,
    StyleUtils,
    StyleSheet,
    StylesheetMap,
    LayoutAlignStyleBuilder,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    LayoutGapStyleBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
