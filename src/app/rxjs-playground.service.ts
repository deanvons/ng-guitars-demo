import { Injectable } from '@angular/core';
import { Guitar } from './models/guitar.model';
import { HttpClient } from '@angular/common/http';
import { tap, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsPlaygroundService {
  constructor(private readonly http: HttpClient) {}

  fetchGuitarsRXJS() {
    this.http
      ?.get<any>('https://thoughtful-vagabond-fibre.glitch.me/guitars')
      .pipe(
        switchMap((data) => {
          return this.http?.get(
            'https://thoughtful-vagabond-fibre.glitch.me/quiz'
          );
        })
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
