import { HttpClient } from '@angular/common/http';
import { XmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryInfo(country: string){
    let api = `http://api.worldbank.org/V2/country/${country}?/indicator/SP.POP.TOTL?format=json`

    return this.http.get(api)
  }
}
