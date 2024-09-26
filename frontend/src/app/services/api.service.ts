import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';  // Tvoj backend URL

  constructor(private http: HttpClient) {}

  getHome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/home`);
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  getContact(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contact`);
  }
}
