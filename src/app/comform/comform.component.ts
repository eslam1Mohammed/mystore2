import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'comform',
  templateUrl: './comform.component.html',
  styleUrls: ['./comform.component.css']
})
export class ComformComponent implements OnInit {

  public product:any;

  constructor(private card:CardService) { 
    this.card.getprodecs().subscribe(res=>
      {
        this.product=res;
      })
  }

  ngOnInit(): void {
  }

}
