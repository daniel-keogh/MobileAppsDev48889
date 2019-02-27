import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetStudentData() : Observable<any> {
    return this.http.get("https://www.jsonblob.com/api/jsonblob/c9500f39-39e2-11e9-ab40-0daf364dd9f5");
  }

  GetWeatherData() : Observable<any> {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&units=metric&APPID=3a65abef076497f464665797353b5a3e");
  }
}
