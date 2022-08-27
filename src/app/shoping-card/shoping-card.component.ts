import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { ConformService } from '../services/conform.service';
@Component({
  selector: 'shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit {
  public product:any;
  public grandtotale!:number;
  public quantitynumber!:number;
  constructor(private card:CardService) 
  {
    this.card.getprodecs().subscribe(res=>
      {
        this.product=res;
        this.grandtotale=this.card.gettotaleprice();
        this.quantitynumber+=this.grandtotale*this.card.getquantity();

      })
      // this.conform.addtoform(this.f);
      // this.grandtotale=this.conform.gettotaleprice();
   }
  ngOnInit(): void {
  }
  form= new FormGroup({
    name1: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name2:new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.minLength(6)]),
    body: new FormControl('', Validators.required)
  });
  
  get f()
  {
    return this.form.controls;
  }
  submit(grand:number,f:any){
    alert("prodect items added to shop card");
    f=this.form;
    grand=this.grandtotale
  }

}
