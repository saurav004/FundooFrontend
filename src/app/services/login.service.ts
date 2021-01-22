import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url= "http://fundoonotes.incubation.bridgelabz.com/api/user/login";
  constructor(private http : HttpClient) { }

  loginAccount(login_data:LoginModel){
    return this.http.post<any>(this._url,login_data);
  }
}
