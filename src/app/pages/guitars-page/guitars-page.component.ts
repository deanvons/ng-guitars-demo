import { Component } from '@angular/core';
import { GuitarListComponent } from "../../guitar-list/guitar-list.component";

@Component({
  selector: 'app-guitars-page',
  imports: [GuitarListComponent],
  templateUrl: './guitars-page.component.html',
  styleUrl: './guitars-page.component.css'
})
export class GuitarsPageComponent {

}
