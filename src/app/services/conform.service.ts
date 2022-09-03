import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewProudect } from '../model/newprodects';
import { DataServiceService } from './data-service.service';
@Injectable({
  providedIn: 'root'
})
export class ConformService {
 urls:string='/assets/prodects.json';
  constructor(){

  }
  }
