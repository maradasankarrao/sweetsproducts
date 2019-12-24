import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServicesweetshopService {
  img1="/assets/images/shutterstock.jpg"
  img2="/assets/images/shutterstock.2.jpg"
  img3="/assets/images/shutterstock3.jpg"
  img4="/assets/images/shutterstock4.jpg"
  img5="/assets/images/shutterstock5.jpg"
  img6="/assets/images/mysorepak.jpg"
  img7="/assets/images/shutterstock1.jpg"
  img8="/assets/images/shutterstock.2.jpg"
sweetsproducts={
  "1":{id:"1",name:"jangiry",price:300,discount:20,discountprice:0,image:this.img1,quantity:1},
  "2":{id:"2",name:"beart",price:300,discount:20,discountprice:0,image:this.img2,quantity:1},
  "3":{id:"3",name:"Rasagulla",price:300,discount:20,discountprice:0,image:this.img3,quantity:1},
  "4":{id:"4",name:"laddu",price:300,discount:20,discountprice:0,image:this.img4,quantity:1},
  "5":{id:"5",name:"Badhusha",price:300,discount:20,discountprice:0,image:this.img5,quantity:1},
  "6":{id:"6",name:"mysorepack",price:300,discount:20,discountprice:0,image:this.img6,quantity:1},
  "7":{id:"7",name:"Gulabjam",price:300,discount:20,discountprice:0,image:this.img7,quantity:1},
  "8":{id:"8",name:"beart",price:300,discount:20,discountprice:0,image:this.img8,quantity:1},

}
cart={}
  constructor() { }

}
