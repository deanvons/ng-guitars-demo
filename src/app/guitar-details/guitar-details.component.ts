import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guitar } from '../models/guitar.model';
import { GuitarServiceService } from '../services/guitar-service.service';

@Component({
  selector: 'app-guitar-details',
  imports: [],
  templateUrl: './guitar-details.component.html',
  styleUrl: './guitar-details.component.css'
})
export class GuitarDetailsComponent implements OnInit {

  guitar?:Guitar

  constructor(private readonly route:ActivatedRoute,private readonly guitarService:GuitarServiceService){

  }

  ngOnInit(): void {
    const guitarId = this.route.snapshot.paramMap.get('id');
    this.guitarService.getGuitarById(guitarId!)
    ?.subscribe({
      next:(guitar)=>{
        this.guitar = guitar[0]
      }
    })
  }
}
