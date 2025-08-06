import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  constructor(){

  }

  itemSource = new BehaviorSubject([]);
  currentSource = this.itemSource.asObservable();
  cartItem:any = [];

  addItem(newCartItem:any){
    const previosCartItem = this.cartItem.find((el:any)=> el.product._id == newCartItem.product._id);
    if (previosCartItem){
        //TODO: Handle Updated Qyt of previousCartItem
    }else{
      this.cartItem.push(newCartItem)
    }
    this.itemSource.next(this.cartItem)
  }

}
