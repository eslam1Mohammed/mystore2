import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ConformService } from '../services/conform.service';

@Component({
  selector: 'comform',
  templateUrl: './comform.component.html',
  styleUrls: ['./comform.component.css']
})
export class ComformComponent implements OnInit 
{
  // public data:any;
  // public total!:number;
  // constructor(private conform:ConformService) 
  // { 
  //  this.data=this.conform.getform();
  //  this.total=this.conform.gettotaleprice();
  // }

  ngOnInit(): void 
  {
  }

}
