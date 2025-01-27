import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GuiterListItemComponent } from '../guiter-list-item/guiter-list-item.component';
import { GuitarServiceService } from '../services/guitar-service.service';
import { Guitar } from '../models/guitar.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guitar-list',
  imports: [GuiterListItemComponent, CommonModule],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit {
  // public by default
  guitars:Guitar[] = []

  // this is the older longer way of DI
  private readonly _guitarService?: GuitarServiceService;
  private readonly _userService?: UserService;
  private readonly _router?: Router;


  constructor(guitarService: GuitarServiceService, userService:UserService,router:Router) {
    this._guitarService = guitarService;
    this._userService = userService
    this._router = router
  }

  ngOnInit(): void {
    this._guitarService?.fetchGuitars()?.subscribe({
      next: (guitarData:Guitar[]) => this.guitars = guitarData, // basically .then
      error: (error) => console.error(error), // basically .catch
    });


  }

  // getter for user state -> creates a local reference called user which can be used in the template
  get user(): User | undefined {
    return this._userService?.user;
  }

  canRender = true;

  handleClick() {
    this._guitarService?.fetchGuitars()?.subscribe({
      next: (guitars) => console.log(guitars), // basically .then
      error: (error) => console.error(error), // basically .catch
    });
  }

  toProfile(){
this._router?.navigateByUrl('/profile')
  }

  handleChildEvent(message: string) {
    alert('I was clicked' + message);
  }
}
