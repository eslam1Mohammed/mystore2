import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  public prodectlist:any=[];
  public cardslist=new BehaviorSubject<any>([]);
  constructor() { }
  getprodecs()
  {
    return this.cardslist.asObservable();
  }
  setprodecs(prodect:any)
  {
    this.prodectlist.push(...prodect)
    this.cardslist.next(prodect)
  }
  addtocard(prodect:any)
  {
    this.prodectlist.push(prodect)
    this.cardslist.next(this.prodectlist)
    this.gettotaleprice()
    this.getquantity();
  }
  gettotaleprice():number
  {
    let totle=0
    this.prodectlist.map((a:any)=>{
      totle+=a.total
    })
    return totle;
  }
  getquantity():number
  {
    let q=0
    this.prodectlist.map((a:any)=>
    {
      q=a.quantity;
    })
    return q;
  }
  removecarditem(prodect:any)
  {
    this.prodectlist.map((a:any,index:any)=>
    {
      if(prodect.name===a.name)
      {
        this.prodectlist.splice(index,1);
      }
    })
  }
}
function removecarditem(prodect: any, any: any) {
  throw new Error('Function not implemented.');
}
function prodect(prodect: any, any: any) {
  throw new Error('Function not implemented.');
}

