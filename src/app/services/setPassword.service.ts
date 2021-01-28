import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SetPassword } from '../models/setPassword';

@Injectable({
  providedIn: 'root'
})
export class SetPasswordService {
  baseUrl = environment.baseUrl;

  _url= "http://fundoonotes.incubation.bridgelabz.com/api/user/reset";
  constructor(private http : HttpClient) { }

  setPassword(url:any,data:SetPassword){   
    return this.http.post(this.baseUrl + url+"?access_token="+localStorage.getItem("token"),data);
    }
  }


