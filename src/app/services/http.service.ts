import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public postRequest(url :any, data: any ):any{
    return this.http.post(this.baseUrl + url,data);
  }

  public putRequestWithToken(url :any, data: any ):any{
    return this.http.put(this.baseUrl + url,data,{ headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  public deleteRequest(url :any):any{
    return this.http.delete(this.baseUrl + url);
  }

  public getRequest(url :any):any{
  return this.http.get(this.baseUrl + url);
  }

  public putRequest(url,data){
  return this.http.put(this.baseUrl + url,data);
  }
}