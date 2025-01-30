import { Injectable } from '@angular/core';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginFacadeService {

  constructor(private readonly userService:UserService, private readonly loginService:LoginService) { }


  public login(username:string){
    return this.loginService.login(username)
          .subscribe({
            next: (user: User) => {
              //this.userService.user = user;
              localStorage.setItem('username',username)
              // sets user state
              this.userService.user = user
            },
            error: () => {
              // Handle that locally. 
            }
          })
  }





}
