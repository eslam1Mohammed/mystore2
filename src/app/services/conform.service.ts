import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConformService {
  public form:any=[];
  public conformlist=new BehaviorSubject<any>([]);
  constructor() { }
  getform()
  {
    return this.conformlist.asObservable();
  }
    getprodecs()
  {
    
  }
  }
