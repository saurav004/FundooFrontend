import { SetPassword } from 'src/app/models/setPassword';
import { HttpService } from 'src/app/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SetPasswordService } from 'src/app/services/setPassword.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  showPassword = false;
  hide = false;
  passwordResetForm: FormGroup;
  token: string;
  setPasswordObject: SetPassword = new SetPassword();

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private httpService: HttpService, private setPasswordService: SetPasswordService, private router: Router, private route: ActivatedRoute) {
    this.passwordResetForm = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      "confirmPassword": [null, [Validators.required]],
    }, { validator: this.passwordMatchValidator("password", "confirmPassword") })
  }

  ngOnInit() {
    this.token = this.route.snapshot.url[1].path;
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
    this.setPasswordService.setPassword("/user/reset-password", this.setPasswordObject,this.token).subscribe(
      (response: any) => {
        console.log(response);
        if (response) {
          console.log(response);
          localStorage.setItem("token", response.token);

          this._snackBar.open(
            "ResetPassword Successfull", "close",

            { duration: 2500 }
          )
          this.router.navigate(['/login'])

        } else {
          console.log(response);
          this._snackBar.open(
            "Reset Failed",
            "close",
            { duration: 2500 }
          )
        }
      }

    )

  }
} 