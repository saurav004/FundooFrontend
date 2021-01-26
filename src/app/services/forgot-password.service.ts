import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPassword } from '../models/forgot-password';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  _url= "http://fundoonotes.incubation.bridgelabz.com/api/user/reset";
  constructor(private http : HttpClient) { }

  sendLink(data:ForgotPassword){
    return this.http.post<any>(this._url,data);
  }

}
