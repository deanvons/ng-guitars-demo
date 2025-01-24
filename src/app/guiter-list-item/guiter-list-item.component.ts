import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-guiter-list-item',
  imports: [CommonModule],
  templateUrl: './guiter-list-item.component.html',
  styleUrl: './guiter-list-item.component.css',
})
export class GuiterListItemComponent {
  guitars: string[] = ['Les Paul', 'Strat', 'Telecaster'];

  show: boolean = false;

  @Input() message?: string;
  
  @Output() childEvent: EventEmitter<string> = new EventEmitter();

  sendMessageBack() {
    this.childEvent.emit('hi mom');
  }
}