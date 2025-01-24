import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  constructor(private readonly router:Router){

  }

  login(){
    localStorage.setItem('username','someUser')
    this.router.navigateByUrl('/guitars')
  }





}
