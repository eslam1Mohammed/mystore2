import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel, ReactiveFormsModule,FormsModule,FormGroup, FormControl, Validators} from '@angular/forms';
import { NewProdectService } from '../services/new-prodect.service';
import { NewProudect } from '../model/newprodects';
import { CardService } from '../services/card.service';
@Component({
  selector: 'prodact-page',
  templateUrl: './prodact-page.component.html',
  styleUrls: ['./prodact-page.component.css']
})
export class ProdactPageComponent {

  prodectpost:NewProudect[]=[];
  corporation:any;
  static q:number;
  constructor(private http:NewProdectService,private addProdecs:CardService) 
  {
    this.http.get().subscribe(prodectpost=>
      {
        this.prodectpost=prodectpost;
        this.prodectpost.forEach((a:any)=>
        {
          Object.assign(a,{total:a.price,quantity:this.onSelected(ProdactPageComponent.q)})
        })
      })
  } 
  
  addprodect(item:any)
  {
    alert("prodect items added to shop card")
    console.log(item);
    this.addProdecs.addtocard(item);
  }
  addprodect2(item:any)
  {
    alert("prodect items added to prodect element")
    console.log(item);
    this.addProdecs.addtocard(item);
  }
  onSelected(sq:any)
  {
   console.log(sq.value)
   sq.value=ProdactPageComponent.q;
   return ProdactPageComponent.q
  }
}
