import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cartService } from '../cart.service';

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

    constructor(private cartService:cartService){

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
}
