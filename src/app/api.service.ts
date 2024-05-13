import { HttpClient } from '@angular/common/http';
import { XmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchCountryInfo(country: string){
    //let api = `http://api.geonames.org/countryInfoJSON?lang=EN&country=${country}&username=malo92`
      let api = `http://api.worldbank.org/v2/country/${country}?format=JSON`

    return this.http.get(api)
  }

  setCountryInfo(country: string){
    let subject = new Subject();

    this.fetchCountryInfo(country).subscribe((data: any) => {
      subject.next({
        countrySelected: data[1][0].name,
        countryCapital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        income: data[1][0].incomeLevel.value,
        countryLat: data[1][0].latitude,
        countryLong: data[1][0].longitude        
      })
    })
    return subject.asObservable();
  }
}
