import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CardService } from '../services/card.service';
import { ConformService } from '../services/conform.service';
import { ShopingCardComponent } from '../shoping-card/shoping-card.component';

@Component({
  selector: 'comform',
  templateUrl: './comform.component.html',
  styleUrls: ['./comform.component.css']
})
export class ComformComponent implements OnInit 
{
 name:string="";
 totale!:number
  constructor(private router:ActivatedRoute) 
  { 
    
  }

  ngOnInit(): void 
  {
    this.router.queryParams.subscribe((prams:any)=>
    {
      console.log(prams);
      this.name=prams.date;
      this.totale=prams.Number;
    })
  }

}
