import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { RxjsPlaygroundService } from '../rxjs-playground.service';
import { LoginFacadeService } from '../login-facade.service';
import keycloak from '../../keycloak';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  constructor(
    private readonly router: Router,
    private readonly loginFacade: LoginFacadeService
  ) {}

  public loginWithKC() {
    keycloak.login();
  }

  public logoutWithKC() {
    keycloak.logout();
  }

  public loginSubmit(loginForm: NgForm): void {
    // username from form
    const { username } = loginForm.value;

    this.loginFacade.login(username);
  }

  public showToken() {
    if (keycloak.authenticated) {
      console.log(keycloak.token);
    }
  }
}
