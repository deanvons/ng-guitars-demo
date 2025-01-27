import { Injectable } from '@angular/core';
import { Guitar } from '../models/guitar.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User;

  get user(): User | undefined {
    return this._user;
  }

  set user(user: User | undefined) {
    this._user = user;
  }

  constructor() {
  }

  public inFavourites(guitarId: string): boolean {
    if (this._user) {
      return Boolean(this.user?.favourites.find((guitar: Guitar) => guitar.id === guitarId));
    }

    return false;
  }

  public addToFavourites(guitar: Guitar): void {
    if (this._user) {
      this._user.favourites.push(guitar);
    }
  }

  public removeFromFavourites(guitarId: string): void {
    if (this._user) {
      this._user.favourites = this._user.favourites.filter((guitar: Guitar) => guitar.id !== guitarId);
    }
  }
}
