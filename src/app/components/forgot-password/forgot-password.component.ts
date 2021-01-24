import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { SetPasswordService } from 'src/app/services/setPassword.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  showPassword = false;
  hide = false;
  passwordResetForm: FormGroup;

  constructor(private fb: FormBuilder, private setPasswordService:SetPasswordService) {
    this.passwordResetForm = this.fb.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      "confirmPassword": [null, [Validators.required]],
    }, { validator: this.passwordMatchValidator("password", "confirmPassword") })
  }

  ngOnInit() {
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
}
