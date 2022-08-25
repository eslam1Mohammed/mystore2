
export class NewProudect
{
    prodectName:string;
    detales:string;
    imges:string;
    hoverdimges:string;
    price:number;
    body:string;
    constructor(prod:string,deit:string,img:string,pri:number,hoverdimges:string,Body:string)
    {
        this.hoverdimges=hoverdimges
        this.prodectName=prod;
        this.detales=deit;
        this.imges=img;
        this.price=pri;
        this.body=Body;
    }
}