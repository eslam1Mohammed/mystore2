import { CardService } from './../services/card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public prodect :any=[];
  public grandtotale!:number;
  constructor(private card:CardService) 
  {
    this.card.getprodecs().subscribe(prodectpost=>
      {
        this.prodect=prodectpost;
        this.grandtotale=this.card.gettotaleprice();
     }
     )
    }
    
  ngOnInit(): void {
  }

}
