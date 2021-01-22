import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Registeration } from 'src/app/models/Registeration';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show = false;
  doesPasswordMatch = false;
  registration: Registeration = new Registeration();
  firstname = new FormControl(this.registration.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]);
  lastname = new FormControl(this.registration.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]);
  email = new FormControl(this.registration.email, [Validators.required, Validators.email]);
  password = new FormControl(this.registration.password, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]);
  confirmPassword:string;
  phoneNumber = new FormControl(this.registration.phoneNumber, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);

  constructor(private _userService: UserService) {}

  ngOnInit() {
  }

  firstnameValidation() {
    return this.firstname.hasError('required') ? 'field is required' : '';
  }
  lastNameValidation() {
    return this.lastname.hasError('required') ? 'field is required' : '';
  }

  emailValidation() {
    return this.email.hasError('required') ? 'field is required' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorPhoneNumber() {
    return this.phoneNumber.hasError('required') ? 'field is required' :
      this.phoneNumber.hasError('phoneNumber') ? '10 characters required' : '';
  }
  getErrorPassword() {
    return this.password.hasError('required') ? 'field is required' :
      this.password.hasError('password') ? 'min 8 elements' : '';
  }
  Register() {
    console.log(this.registration);
    this._userService.sinup(this.registration)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      )
  }

  // confirm new password validator
  private passwordMatcher() {
    if(this.confirmPassword == this.password.value){
      this.doesPasswordMatch = true;
    }
    else
    this.doesPasswordMatch = false;
  }
}
