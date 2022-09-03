import { Component, OnInit } from '@angular/core';
import { NewProdectService } from '../services/new-prodect.service';
import { NewProudect } from '../model/newprodects';
import { CardService } from '../services/card.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'prodact-page',
  templateUrl: './prodact-page.component.html',
  styleUrls: ['./prodact-page.component.css']
})
export class ProdactPageComponent {
  prodectpost:NewProudect[]=[];
  corporation:any;
  q!:number;
  prodectName!:string;
  imges!:string;
  price!:number;
  detales!:string;
  constructor(private http:NewProdectService,private addProdecs:CardService,private router:Router) 
  {
    this.http.get().subscribe(prodectpost=>
      {
        this.prodectpost=prodectpost;
        this.prodectpost.forEach((a:any)=>
        {
          Object.assign(a,{total:a.price,quantity:1})
        })
      })
  } 
  
  addprodect(item:any)
  {
    alert("prodect items added to shop card")
    console.log(item);
    this.addProdecs.addtocard(item);
    // this.router.navigate(['shoping-card'],{queryParams:{Number:this.q}});
  }
  addprodect2()
  {
    this.router.navigate(['/prodect-element'],{queryParams:{data:this.prodectName,ss:this.imges,ss2:this.detales,ss3:this.price}})
  }
}
