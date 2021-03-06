import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getFilmInfo() : Observable<any> {
    return this.http.get('http://www.omdbapi.com/?s=War&apikey=11483156');
  }
}
