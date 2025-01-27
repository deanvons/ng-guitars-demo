import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private readonly router:Router,private readonly loginService:LoginService,private readonly userService:UserService){

  }

  

  public loginSubmit(loginForm: NgForm): void {

    // username from form
    const { username } = loginForm.value;

    this.loginService.login(username)
      .subscribe({
        next: (user: User) => {
          //this.userService.user = user;
          localStorage.setItem('username',username)
          // sets user state
          this.userService.user = user
          this.router.navigateByUrl('/guitars')
        },
        error: () => {
          // Handle that locally. 
        }
      })
  }





}
