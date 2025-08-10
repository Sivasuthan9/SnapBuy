import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cartService } from '../cart.service';
import { Api } from '../api';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit{
    cartItems:any = []
    cartCount = 0;
    subTotal = 0;
    estTotal = 0;

    constructor(private cartService:cartService, private api:Api){

    }

    ngOnInit(): void {
        
        this.cartService.currentSource.subscribe((data:any)=> {
          this.cartItems = data;
        })
        this.calculateCartItems()
    }

    deleteItem(product_id:string) {
        const prevItem: any = this.cartItems.find((item:any) => item.product._id == product_id)
        if (prevItem) {
        const filteredItems = this.cartItems.filter((item:any) => item.product._id!== product_id);
        // this.cartItems = filteredItems;
        this.cartService.updateItem(filteredItems);
      }
      this.calculateCartItems()
  }

    calculateCartItems(){
        this.cartCount = this.cartItems.length;
        this.subTotal = this.cartItems.reduce((acc:any, current:any) => {
                                        return acc + current.qty;
                                      }, 0);
        this.estTotal = this.cartItems.reduce((acc:any, current:any) => {
                                        return acc + (current.product.price*current.qty);
                                      }, 0)
                                  
    }

    decreaseQty(product_id: string){
      const previosCartItem: any = this.cartItems.find((item:any) => item.product._id == product_id)
      let qty = previosCartItem.qty;

      if (qty ==1)
        return;
      qty = qty -1;
      if (previosCartItem){
        //TODO: Handle Updated Qyt of previousCartItem
        // update item qty
        this.cartItems = this.cartItems.map((item: any) => {
        if (item.product._id == previosCartItem.product._id ) {
              item.qty = qty;
        }
        return item})
    }
    this.cartService.updateItem(this.cartItems);
    this.calculateCartItems();
    }


    increaseQty(product_id: string){
      const previosCartItem: any = this.cartItems.find((item:any) => item.product._id == product_id)
      let qty = previosCartItem.qty;

      if (qty == previosCartItem.product.stock){
          return;
        }
        qty = qty + 1;

      if (previosCartItem){
        //TODO: Handle Updated Qyt of previousCartItem
        // update item qty
        this.cartItems = this.cartItems.map((item: any) => {
        if (item.product._id == previosCartItem.product._id ) {
              item.qty = qty;
        }
        return item})
    }
    this.cartService.updateItem(this.cartItems);
    this.calculateCartItems();
    }

    createOrder(){
      const order = this.cartItems;
      this.api.createOrder(order).subscribe((data:any)=>{
          if (data.success){
            const orderId = data.order._id;
          }
      })

    }
    
}


