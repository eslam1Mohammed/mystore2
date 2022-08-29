import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardService } from '../services/card.service';
import { ConformService } from '../services/conform.service';

@Component({
  selector: 'comform',
  templateUrl: './comform.component.html',
  styleUrls: ['./comform.component.css']
})
export class ComformComponent implements OnInit 
{
 
  constructor() 
  { 
  
  }

  ngOnInit(): void 
  {
  }

}
