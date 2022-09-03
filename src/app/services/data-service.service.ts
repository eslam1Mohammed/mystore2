import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService<a> {

  constructor(@Inject('string')private url:string,private http:HttpClient) { }
  get()
  {
   return this.http.get<a[]>(this.url);
  }
  getid(id:any)
  {
   return this.http.get<a[]>(this.url+"/"+id);
  }
  post(resourse:a)
  {
    return this.http.post<a[]>(this.url,JSON.stringify(resourse));
  }
  delete(resourseid:number)
  {
    return this.http.delete<a>(`${this.url}+/+${resourseid}`);
  }
  update(resourse:a)
  {
    return this.http.patch<a[]>(this.url,resourse);
  }
}
