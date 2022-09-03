import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewProudect } from '../model/newprodects';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class NewProdectService extends DataServiceService<NewProudect>
 {
  constructor( http:HttpClient) {
    super('/assets/prodects.json',http)
   }

}
