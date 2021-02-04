import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { SetPassword } from 'src/app/models/setPassword';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  showPassword = false;
  hide = false;
  passwordResetForm: FormGroup;
  token: string;
  setPasswordObject: SetPassword = new SetPassword();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.passwordResetForm = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      "confirmPassword": [null, [Validators.required]],
    }, { validator: this.passwordMatchValidator("password", "confirmPassword") })
  }

  ngOnInit() {
    this.token = this.route.snapshot.url[1].path;
    localStorage.setItem("token", this.token);

  }
  emailValidation() {
    return this.passwordResetForm.get('email').hasError('required') ? 'Enter email' :
      this.passwordResetForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    return this.passwordResetForm.controls.password.hasError('required') ? 'Enter Password' :
      this.passwordResetForm.controls.password.errors.maxLength ? 'max 15 characters' :
        this.passwordResetForm.controls.password.errors.minLength ? 'min 8 characters' : '';
  }
  getErrorConfirmPassword() {
    console.log(this.passwordResetForm);
    return this.passwordResetForm.controls.confirmPassword.hasError('required') ? 'Enter Password' :
      this.passwordResetForm.controls.confirmPassword.hasError('passwordMismatch') ? 'Passwords do not match' : '';
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
  onSubmit() {
    this.setPasswordObject.newPassword = this.passwordResetForm.controls.password.value;
    console.log(this.setPasswordObject.newPassword);
    this.httpService.postRequestWithToken("/user/reset-password", this.setPasswordObject).subscribe(
      (response) => {
        console.log(response);
        this._snackBar.open(
          "Password Successfully Set", "Close",
          { duration: 2500 }
        )
        this.router.navigate(['/login'])
      },(error) => {                              
        this._snackBar.open(
          "Reset Failed",
          "Close",
          { duration: 2500 }
        )
      }
    )
  }
} 
