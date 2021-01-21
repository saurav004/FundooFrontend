import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Registeration} from "../models/Registeration";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url= "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
  constructor(private http : HttpClient) { }

  sinup(register:Registeration){
    return this.http.post<any>(this._url,register);
  }
}
