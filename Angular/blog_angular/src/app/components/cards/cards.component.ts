import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  data:any[]=[]

  constructor(private mockService:DataService){}

  ngOnInit(): void {
      this.data=this.mockService.getMockData()
  }
}
