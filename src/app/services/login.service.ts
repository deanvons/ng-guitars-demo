import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user.model';
import { USER_URL } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Dependency Injection.
  constructor(private readonly http: HttpClient) { }


  public login(username: string): Observable<User> {
    return this.checkUsername(username)
      .pipe(
        // the switch map rxjs function will switch to a different observable. 
        // Perfect for situations where one fetch is done just to do another fetch
        // In this case, we send a request to check if the user exists, if not we need to send another request so we switch
        // I will explain this further in our next class.
        switchMap((user: User | undefined) => {
          if (user === undefined) { // user does not exist 
            return this.createUser(username);
          }
          // if user already exists return it as an observable<User>, the of function does this for us
          return of(user);
        })
      )
  } 

  // Check if user exists
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${USER_URL}?username=${username}`)
      .pipe(
        // RxJS Operators, changes data being forwarded to the subsriber. In this case just pulls out the object so the component just gets a User and not a User array.
        map((response: User[]) => response.pop())
      )
  }

  // Create User
  private createUser(username: string): Observable<User> {
    
    const user = {
      username,
      favourites: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
  
    return this.http.post<User>(USER_URL, user, {
      headers
    })

  }
}
