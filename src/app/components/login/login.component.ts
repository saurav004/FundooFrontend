import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
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
  loginForm: FormGroup;
  login: LoginModel = new LoginModel();

  constructor(private httpService: HttpService,private _snackBar: MatSnackBar,private route: ActivatedRoute,private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      "email": [this.login.email, [Validators.required, Validators.email]],
      "password": [this.login.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    })
   }
  hide: boolean = true;
  ngOnInit() {
    this.token=this.route.snapshot.paramMap.get('token');
  }

  LoginMethod() {
    this.token=localStorage.getItem("token")

    this.httpService.postRequest("user/login",this.login)
      .subscribe(
        (response:any)=>{
          if(response.id != null)
          {
            localStorage.setItem("token",response.id);
            localStorage.setItem("email",response.email);

            this._snackBar.open(
              "Login Successfull","close",
              
               { duration: 2500 }
           )
           this.router.navigate(['/dashboard/home']);
          }else {
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
    return this.loginForm.controls.email.hasError('required') ? 'Enter email' :
      this.loginForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    return this.loginForm.controls.password.hasError('required') ? 'Enter Password' :
      this.loginForm.controls.password.hasError('password') ? 'min 8 characters' : '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
