import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GuiterListItemComponent } from '../guiter-list-item/guiter-list-item.component';
import { GuitarServiceService } from '../services/guitar-service.service';
import { Guitar } from '../models/guitar.model';

@Component({
  selector: 'app-guitar-list',
  imports: [GuiterListItemComponent, CommonModule],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit {
  // public by default
  guitars:Guitar[] = []

  private readonly _guitarService?: GuitarServiceService;


  constructor(guitarService: GuitarServiceService) {
    this._guitarService = guitarService;
  }

  ngOnInit(): void {
    this._guitarService?.fetchGuitars()?.subscribe({
      next: (guitarData:Guitar[]) => this.guitars = guitarData, // basically .then
      error: (error) => console.error(error), // basically .catch
    });


  }

  canRender = true;

  handleClick() {
    this._guitarService?.fetchGuitars()?.subscribe({
      next: (guitars) => console.log(guitars), // basically .then
      error: (error) => console.error(error), // basically .catch
    });
  }

  handleChildEvent(message: string) {
    alert('I was clicked' + message);
  }
}
