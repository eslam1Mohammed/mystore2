export class User
{
    Name:string;
    adress:string
    password:any;
    email:string;
    totle:number;
    constructor(n:string,ad:string,p:any,e:string,t:number)
    {
        this.Name=n;
        this.adress=ad;
        this.password=p;
        this.email=e;
        this.totle=t;
    }
}