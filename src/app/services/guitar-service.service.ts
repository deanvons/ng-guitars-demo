import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Guitar } from '../models/guitar.model';

@Injectable({
  providedIn: 'root',
})
export class GuitarServiceService {
  _http?: HttpClient;
  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  someGuitarState:string = "im shared"
 
  // if data from an http needs to be used by a component only then return the get call
  fetchGuitars() {
    return this._http
      ?.get<Guitar[]>('https://thoughtful-vagabond-fibre.glitch.me/guitars')
      
  }

  getGuitarById(guitarId:string) {
    return this._http
      ?.get<Guitar[]>(`https://thoughtful-vagabond-fibre.glitch.me/guitars/?id=${guitarId}`)
      
  }
}
