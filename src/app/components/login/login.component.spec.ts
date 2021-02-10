import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatSnackBarModule, MatInputModule, MatSelectModule, MatOptionModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AddNoteComponent } from '../addNote/addNote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditLabelsComponent } from '../editLabels/editLabels.component';
import { ForgotPasswordComponent } from '../forgotPassword/forgot-password.component';
import { NotesOfCertainLabelComponent } from '../notesOfCertainLabel/notesOfCertainLabel.component';
import { RegisterComponent } from '../register/register.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { SearchComponent } from '../search/search.component';
import { SetPasswordComponent } from '../setPassword/set-password.component';
import { TitleComponent } from '../title/title.component';
import { TrashComponent } from '../trash/trash.component';
import { ViewNoteComponent } from '../viewNote/ViewNote.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElementRef: DebugElement;
  let nativeElementRef: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent,
        RegisterComponent,
        ViewNoteComponent,
        AppComponent,
        AddNoteComponent,
        EditLabelsComponent,
        NotesOfCertainLabelComponent,
        SearchComponent,
        TrashComponent,
        ArchiveComponent,
        RemindersComponent,
        DashboardComponent,
        SetPasswordComponent,
        ForgotPasswordComponent,
        TitleComponent,],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatTooltipModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardModule,
        MatCheckboxModule,
        AppRoutingModule,
        MatDialogModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElementRef = fixture.debugElement.query(By.css("form"));
    nativeElementRef = debugElementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check users email address is invalid', () => {
    let email = component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors['email']).toBeTruthy();
  })

  it('should check valid email  is entered', () => {
    let email = component.loginForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  })

  it('should check users password is invalid', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();
    password.setValue('abc');
  })

  it('should check valid password is entered', () => {
    let password = component.loginForm.controls['password'];
    password.setValue('password');
    expect(password.errors).toBeNull();
  })

  it('should check form is valid or not when no values entered', () => {
    expect(component.loginForm.valid).toBeFalsy();
  })

  it('should check form is valid or not when values  entered', () => {
    let password = component.loginForm.controls['password'];
    let email = component.loginForm.controls['email'];
    email.setValue('abc@gmail.com');
    password.setValue('password');
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('should check form is submititted', () => {
    expect(component.loginForm.valid).toBeFalsy();
    let btn = fixture.debugElement.query(By.css('#submitButton'));
    fixture.detectChanges()
    expect(nativeElementRef.querySelector('button').disabled).toBeTruthy();
    component.loginForm.controls['password'].setValue('password');
    component.loginForm.controls['email'].setValue('abc@gmail.com');
    expect(component.loginForm.valid).toBeTruthy();
    fixture.detectChanges();
    expect(nativeElementRef.querySelector('button').disabled).toBeFalsy();
  })
});
