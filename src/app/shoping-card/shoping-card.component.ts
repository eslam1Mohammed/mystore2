
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  public name:any;
  public quantity!:number;
  public prise!:number
  constructor(private card:CardService,private user:ConformService,private router:Router) 
  {
    
    this.card.getprodecs().subscribe(res=>
      {
        this.product=res;
        this.grandtotale=this.card.gettotaleprice();

      })
   }
  ngOnInit(): void {
    // this.route.queryParams.subscribe((prams:any)=>
    // {
    //   console.log(prams);
    //   this.quantity=prams.Number;
    // })
  }
  form= new FormGroup({
    name1: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address:new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required ,Validators.minLength(6)])}
    );
  
  get f()
  {
    return this.form.controls;
  }
  remove(item:any)
  {
   this.card.removecarditem(item);
   this.grandtotale=this.card.gettotaleprice();
  }
  submitForm()
  {
    if(this.form.valid &&this.grandtotale!==0)
    {
      alert(`ok`)
      this.router.navigate(['/comform'],{queryParams:{date:this.name,Number:this.grandtotale}})
    }
    if(this.form.invalid)
    {
    alert("the submite is invaled");
    };
}
}
