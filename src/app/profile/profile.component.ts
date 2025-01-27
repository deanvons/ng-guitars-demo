import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

constructor(private readonly userService:UserService){

}

 // getter for user state -> creates a local reference called user which can be used in the template
 get user(): User | undefined {
  return this.userService?.user;
}
}
