import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cartService {
  constructor(){

  }

  itemSource = new BehaviorSubject([]);
  currentSource = this.itemSource.asObservable();
  cartItem:any = [];

  addItem(newCartItem:any){
    const previosCartItem = this.cartItem.find((el:any)=> el.product._id == newCartItem.product._id);
    if (previosCartItem){
        //TODO: Handle Updated Qyt of previousCartItem
        // update item qty
        this.cartItem = this.cartItem.map((item: any) => {
        if (item.product._id == previosCartItem.product._id ) {
              item.qty = newCartItem.qty;
        }
        return item})
    }else{
      this.cartItem.push(newCartItem)
    }
    this.itemSource.next(this.cartItem)
  }


    //Updating card items count in the app.html(header)
  updateItem(item:[]){
    this.cartItem = item;
    this.itemSource.next(this.cartItem);
  }

}
