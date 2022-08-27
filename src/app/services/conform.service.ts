import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConformService {
  public form:any=[];
  public conformlist=new BehaviorSubject<any>([]);
  constructor() { }
  setprodecs(form:any)
  {
    this.form.push(...form)
    this.conformlist.next(form)
  }
  getform()
  {
    return this.conformlist.asObservable();
  }
  addtoform(form:any)
  {
    this.form.push(...form)
    this.conformlist.next(form)
    this.gettotaleprice()
  }
  gettotaleprice():number
  {
    let totle=0
    this.form.
    map((a:any)=>{
      totle+=a.total
    })
    return totle;
  }
  }
