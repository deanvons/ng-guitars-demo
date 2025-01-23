import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuitarListComponent } from "./guitar-list/guitar-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GuitarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-guitar-shop';
}
