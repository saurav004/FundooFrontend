import { ForgotPassword } from '../../models/forgot-password';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordObject : ForgotPassword = new ForgotPassword();
  email = new FormControl(this.forgotPasswordObject.email, [Validators.required, Validators.email]);


  constructor(private fb: FormBuilder, private httpservice:HttpService,private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
  emailValidation() {
    return this.email.hasError('required') ? 'Enter email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit(){
    console.log(this.forgotPasswordObject);
    this.httpservice.postRequest("user/reset", this.forgotPasswordObject).subscribe(
      (response: any) => {
        if (response.success) {
          console.log(response);
          this._snackBar.open(
            "Link sent", "close",
            { duration: 2500 }
          )
        }
      },  (error) => {
        this._snackBar.open(
          "Failed to send link",
          "close",
          { duration: 2500 }
        )
      }
    )
  }
}

