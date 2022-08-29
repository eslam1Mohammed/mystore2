
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConformService {
  public user:any=[];
  public carddetales=new BehaviorSubject<any>([]);
  constructor() {
   
  }
  getprodecs()
  {
    return this.carddetales.asObservable();
  }
  addtocard(prodect:any)
  {
    this.user.push(prodect)
    this.carddetales.next(this.user)
  }
  setprodecs(prodect:any)
  {
    this.user.push(...prodect)
    this.carddetales.next(prodect)
  }
  }
