import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'prodect-element',
  templateUrl: './prodect-element.component.html',
  styleUrls: ['./prodect-element.component.css']
})
export class ProdectElementComponent {
  public product:any=[];
  constructor(private card:CardService) 
  {
    this.card.getprodecs().subscribe(res=>
      {
        this.product=res;
      })
   }
}
