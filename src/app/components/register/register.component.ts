import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Registeration } from 'src/app/models/Registeration';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showPassword = false;
  doesPasswordMatch = false;
  registration: Registeration = new Registeration();
  reactiveForm: FormGroup;

  constructor(private httpService: HttpService, private router: Router, private _snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      "firstName": [this.registration.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      "lastName": [this.registration.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      "email": [this.registration.email, [Validators.required, Validators.email]],
      "password": [this.registration.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      "confirmPassword": [null, [Validators.required]],
      "phoneNumber": [this.registration.phoneNumber, [Validators.required, Validators.minLength(13), Validators.maxLength(15)]],
    }, { validator: this.passwordMatchValidator("password", "confirmPassword") })
  }

  firstNameValidation() {
    return this.reactiveForm.controls.firstName.hasError('required') ? 'Enter first name' : '';
  }
  lastNameValidation() {
    return this.reactiveForm.controls.lastName.hasError('required') ? 'Enter last name' : '';
  }

  emailValidation() {
    return this.reactiveForm.controls.email.hasError('required') ? 'Enter email' :
      this.reactiveForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPhoneNumber() {
    console.log(this.reactiveForm);
    return this.reactiveForm.controls.phoneNumber.hasError('required') ? 'Enter Phone Number' :
      this.reactiveForm.controls.phoneNumber.errors.maxlength ? 'max 15 characters required' :
        this.reactiveForm.controls.phoneNumber.errors.minlength ? 'min 13 characters required' :
          this.reactiveForm.controls.phoneNumber.errors.pattern ? 'pattern do not match (ex: +91 9284543205)' : '';
  }

  getErrorPassword() {
    console.log(this.reactiveForm);
    return this.reactiveForm.controls.password.hasError('required') ? 'Enter Password' :
      this.reactiveForm.controls.password.errors.maxLength ? 'max 15 characters' :
        this.reactiveForm.controls.password.errors.minLength ? 'min 8 characters' : '';
  }
  getErrorConfirmPassword() {
    console.log(this.reactiveForm);
    return this.reactiveForm.controls.confirmPassword.hasError('required') ? 'Enter Password' :
      this.reactiveForm.controls.confirmPassword.hasError('passwordMismatch') ? 'Passwords do not match' : '';
  }
  register() {
    console.log(this.registration);
    console.log(this.reactiveForm);
    this.registration.firstName = this.reactiveForm.value["firstName"];
    this.registration.lastName = this.reactiveForm.value["lastName"];
    this.registration.phoneNumber = this.reactiveForm.value["phoneNumber"];
    this.registration.email = this.reactiveForm.value["email"];
    this.registration.password = this.reactiveForm.value["password"];
    console.log(this.registration)
    this.httpService.postRequest("user/userSignUp",this.registration)
      .subscribe(
        data => {this.openSnackBar("Account successfully created", "Close");
        this.router.navigate(['/login']);
      },
        error => {this.openSnackBar("Failed to create account", "Close")},
      )
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
