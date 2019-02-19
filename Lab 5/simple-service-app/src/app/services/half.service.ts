import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HalfService {

  constructor() { }

  getHalf(x : number) : number {
     return x / 2;
  }
}
