import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  
  constructor(private http: HttpClient) {}

  rootURL = '/api';

  getSuccess() {
    return this.http.get(this.rootURL + '/success', 
    {responseType: 'text'});
  }
  
}