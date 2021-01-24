import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetPasswordService {

  _url= "http://fundoonotes.incubation.bridgelabz.com/api/user/login";
  constructor(private http : HttpClient) { }

  loginAccount(login_data){
    return this.http.post<any>(this._url,login_data);
  }
}
