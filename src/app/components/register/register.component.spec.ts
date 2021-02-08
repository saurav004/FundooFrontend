import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatTooltipModule, MatListModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatCardModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { AddNoteComponent } from '../addNote/addNote.component';
import { ArchiveComponent } from '../archive/archive.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { EditLabelsComponent } from '../editLabels/editLabels.component';
import { ForgotPasswordComponent } from '../forgotPassword/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { NotesOfCertainLabelComponent } from '../notesOfCertainLabel/notesOfCertainLabel.component';
import { RemindersComponent } from '../reminders/reminders.component';
import { SearchComponent } from '../search/search.component';
import { SetPasswordComponent } from '../setPassword/set-password.component';
import { TitleComponent } from '../title/title.component';
import { TrashComponent } from '../trash/trash.component';
import { ViewNoteComponent } from '../viewNote/ViewNote.component';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent,
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
        LoginComponent,
        TitleComponent,],
      imports: [
        RouterTestingModule,
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
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("form"));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check users email address is invalid', () => {
    let email = component.reactiveForm.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');
    expect(email.errors['email']).toBeTruthy();
  })

  it('should check valid email name is entered', () => {
    let email = component.reactiveForm.controls['email'];
    email.setValue('abc@gmail.com');
    expect(email.errors).toBeNull();
  })

  it('should check users password is invalid', () => {
    let password = component.reactiveForm.controls['password'];
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();
    password.setValue('abc');
  })

  it('should check valid password is entered', () => {
    let password = component.reactiveForm.controls['password'];
    password.setValue('password');
    expect(password.errors).toBeNull();
  })


  it('should check users firstName is invalid', () => {
    let firstName = component.reactiveForm.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
    expect(firstName.pristine).toBeTruthy();
    expect(firstName.errors['required']).toBeTruthy();
    firstName.setValue('abc');
  })

  it('should check valid firstName is entered', () => {
    let firstName = component.reactiveForm.controls['firstName'];
    firstName.setValue('firstName');
    expect(firstName.errors).toBeNull();
  })

  it('should check users lastName is invalid', () => {
    let lastName = component.reactiveForm.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
    expect(lastName.pristine).toBeTruthy();
    expect(lastName.errors['required']).toBeTruthy();
    lastName.setValue('abc');
  })

  it('should check valid lastName is entered', () => {
    let lastName = component.reactiveForm.controls['lastName'];
    lastName.setValue('lastName');
    expect(lastName.errors).toBeNull();
  })

  it('should check form is valid or not when no values entered', () => {
    expect(component.reactiveForm.valid).toBeFalsy();
  })
  it('should check users phoneNumber is invalid', () => {
    let phoneNumber = component.reactiveForm.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();
    expect(phoneNumber.pristine).toBeTruthy();
    expect(phoneNumber.errors['required']).toBeTruthy();
    phoneNumber.setValue('abc');
  })

  it('should check valid phoneNumber is entered', () => {
    let phoneNumber = component.reactiveForm.controls['phoneNumber'];
    phoneNumber.setValue('+91 9284543205');
    expect(phoneNumber.errors).toBeNull();
  })

  it('should check form is valid or not when no values entered', () => {
    expect(component.reactiveForm.valid).toBeFalsy();
  })

  it('should check form is valid or not when values  entered', () => {
    let password = component.reactiveForm.controls['password'];
    let firstName = component.reactiveForm.controls['firstName'];
    let lastName = component.reactiveForm.controls['lastName'];
    let phoneNumber = component.reactiveForm.controls['phoneNumber'];
    let email = component.reactiveForm.controls['email'];
    let confirmPassword = component.reactiveForm.controls['confirmPassword'];
    email.setValue('abc@gmail.com');
    password.setValue('password');
    firstName.setValue('firstName');
    lastName.setValue('lastName');
    phoneNumber.setValue('+91 9284543205');
    confirmPassword.setValue('password');
    expect(component.reactiveForm.valid).toBeTruthy();
  })

  it('should check form is submititted', () => {
    expect(component.reactiveForm.valid).toBeFalsy();
    let btn = fixture.debugElement.query(By.css('#submitButton'));
    fixture.detectChanges()
    expect(el.querySelector('button').disabled).toBeTruthy();
    component.reactiveForm.controls['password'].setValue('password');
    component.reactiveForm.controls['firstName'].setValue('firstName');
    component.reactiveForm.controls['lastName'].setValue('lastName');;
    component.reactiveForm.controls['phoneNumber'].setValue('+91 9284543205');
    component.reactiveForm.controls['email'].setValue('abc@gmail.com');
    component.reactiveForm.controls['confirmPassword'].setValue('password');
    expect(component.reactiveForm.valid).toBeTruthy();
    fixture.detectChanges();
    expect(el.querySelector('button').disabled).toBeFalsy();
  })
});
