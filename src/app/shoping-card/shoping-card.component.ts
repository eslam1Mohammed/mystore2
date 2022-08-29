
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { CardService } from '../services/card.service';
import { ConformService } from '../services/conform.service';
@Component({
  selector: 'shoping-card',
  templateUrl: './shoping-card.component.html',
  styleUrls: ['./shoping-card.component.css']
})
export class ShopingCardComponent implements OnInit 
{
  public product:any;
  public grandtotale!:number;
  public quantitynumber!:number;
  router: any;
  constructor(private card:CardService,private user:ConformService) 
  {
    this.card.getprodecs().subscribe(res=>
      {
        this.product=res;
        this.grandtotale=this.card.gettotaleprice();
        this.quantitynumber=this.card.getquantity();

      })
   }
  ngOnInit(): void {
  }
  form= new FormGroup({
    name1: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address:new FormControl('', [Validators.required, Validators.minLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.minLength(6)]),
    qq:new FormControl(this.card.gettotaleprice()),
    body: new FormControl("submit", Validators.required)
  });
  
  get f()
  {
    return this.form.controls;
  }
  submitForm()
  {
    console.log(this.form.value);
  }
}
