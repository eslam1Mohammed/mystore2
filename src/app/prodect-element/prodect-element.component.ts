
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'prodect-element',
  templateUrl: './prodect-element.component.html',
  styleUrls: ['./prodect-element.component.css']
})
export class ProdectElementComponent {

  id:any;
  imge:any
  prise:any
  name:any
  detales:any
  constructor(private router:ActivatedRoute) 
  {
    this.name=this.router.snapshot.paramMap.get("prodect-Name")
    console.log(this.name)
  }
  ngOnInit(): void 
  {
   
  }

}
