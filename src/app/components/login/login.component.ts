import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show = false;
  login: LoginModel = new LoginModel();
  email = new FormControl(this.login.email, [Validators.required, Validators.email]);
  password = new FormControl(this.login.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]);

  constructor(private loginService: LoginService,private _snackBar: MatSnackBar) { }
  hide: boolean = true;
  ngOnInit() {
  }

  LoginMethod() {
    console.log(this.login);
    this.loginService.loginAccount(this.login)
      .subscribe(
        data => this.openSnackBar("Success","Close"),
        error => this.openSnackBar("Failed","Close")
      )
  }

  emailValidation() {
    return this.email.hasError('required') ? 'Enter email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    return this.password.hasError('required') ? 'Enter Password' :
      this.password.hasError('password') ? 'min 8 elements' : '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
