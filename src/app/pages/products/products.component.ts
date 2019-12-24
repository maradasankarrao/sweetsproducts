import { Component, OnInit } from '@angular/core';
import{ServicesweetshopService} from 'src/app/servicesweetshop.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private sankar:ServicesweetshopService) { }
productsloop=[]

  ngOnInit() {
    this.productsloop = Object.values(this.sankar.sweetsproducts);
  }
  addcartitem(s: any){
    if(this.sankar.cart.hasOwnProperty(s.id)){
      this.sankar.cart[s.id].quantity += 1
      console.log(this.sankar.cart)
    }
    else{
      this.sankar.cart[s.id] = s
      console.log(this.sankar.cart)
    }
   
  }
 
}
