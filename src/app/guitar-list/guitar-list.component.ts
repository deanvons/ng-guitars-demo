import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GuiterListItemComponent } from '../guiter-list-item/guiter-list-item.component';

@Component({
  selector: 'app-guitar-list',
  imports: [GuiterListItemComponent,CommonModule],
  templateUrl: './guitar-list.component.html',
  styleUrl: './guitar-list.component.css',
})
export class GuitarListComponent implements OnInit{
  // public by default
  guitar: string = 'Les Paul';
  private costPrice: number = 5699;

ngOnInit(): void {
  alert("GuitarListComponent loaded")
}

  canRender = true;

  handleClick() {
    alert('I was clicked');
  }

  handleChildEvent(message:string) {
    alert('I was clicked' + message);
  }
}