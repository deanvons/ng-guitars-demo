import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GuiterListItemComponent } from '../guiter-list-item/guiter-list-item.component';
import { GuitarServiceService } from '../services/guitar-service.service';

@Component({
  selector: 'app-guitar-list',
  imports: [GuiterListItemComponent, CommonModule],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit {
  // public by default
  guitar: string = 'Les Paul';
  private costPrice: number = 5699;

  private readonly _guitarService?: GuitarServiceService;

  constructor(guitarService: GuitarServiceService) {
    this._guitarService = guitarService;
  }

  ngOnInit(): void {
    alert('GuitarListComponent loaded');
  }

  canRender = true;

  handleClick() {
    this._guitarService?.fetchGuitars()
  }

  handleChildEvent(message: string) {
    alert('I was clicked' + message);
  }
}
