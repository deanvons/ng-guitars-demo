import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Guitar } from '../models/guitar.model';

@Component({
  selector: 'app-guiter-list-item',
  imports: [CommonModule],
  templateUrl: './guiter-list-item.component.html',
  styleUrl: './guiter-list-item.component.css',
})
export class GuiterListItemComponent {
 

  @Input() guitar?: Guitar;
  
  @Output() childEvent: EventEmitter<string> = new EventEmitter();

  sendMessageBack() {
    this.childEvent.emit(this.guitar?.id);
  }
}