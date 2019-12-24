import { Component, OnInit } from '@angular/core';
import{ServicesweetshopService} from 'src/app/servicesweetshop.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private sankar:ServicesweetshopService) { }
cartlist=[]
total = 0
  ngOnInit() {
    this.cartlist=Object.values(this.sankar.cart)
    this.getTotal()
  }
  decreaseQuanity(cid){
    if(this.sankar.cart[cid].quantity>1){
      this.sankar.cart[cid].quantity -= 1
    }else{
      delete this.sankar.cart[cid];
    }
    this.cartlist = Object.values(this.sankar.cart);
    this.getTotal()
  }
  increaseQuanity(cid){
    this.sankar.cart[cid].quantity += 1
    this.cartlist = Object.values(this.sankar.cart);
    this.getTotal()
  }
  getTotal(){
    this.total = 0;
    for(let i=0;i<this.cartlist.length;i++){
      this.total += this.cartlist[i].price*((100-this.cartlist[i].discount)/100)*this.cartlist[i].quantity;
    }
  }
  
}
