import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/models/login';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  token: string;
  showPassword = false;
  login: LoginModel = new LoginModel();
  email = new FormControl(this.login.email, [Validators.required, Validators.email]);
  password = new FormControl(this.login.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]);

  constructor(private httpService: HttpService,private _snackBar: MatSnackBar,private route: ActivatedRoute,private router: Router) { }
  hide: boolean = true;
  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
  }

  LoginMethod() {
    console.log(this.login);
    this.token=localStorage.getItem("token")

    this.httpService.postRequest("user/login",this.login)
      .subscribe(
        (response:any)=>{
          if(response.id != null)
          {
            console.log(response);
            localStorage.setItem("token",response.id);
            localStorage.setItem("email",response.email);
            console.log(localStorage);

            this._snackBar.open(
              "Login Successfull","close",
              
               { duration: 2500 }
           )
           this.router.navigate(['/dashboard']);
          }else {
           console.log(response);
           this._snackBar.open(
             "Login Failed",
             "close",
             { duration: 2500 }
           )
         }
        }
      )
  }

  emailValidation() {
    return this.email.hasError('required') ? 'Enter email' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    return this.password.hasError('required') ? 'Enter Password' :
      this.password.hasError('password') ? 'min 8 characters' : '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
