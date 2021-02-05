import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token = localStorage.getItem('token');
  baseUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

public getAllNotes(url :any, data: any ):any{
  return this.http.get(this.baseUrl + url);
}
}

