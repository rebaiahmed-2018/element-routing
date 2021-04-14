import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
