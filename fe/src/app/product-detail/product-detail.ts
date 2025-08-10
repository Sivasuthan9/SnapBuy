import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';
import { cartService } from '../cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
      product:any = null;
      qty:any=1;
      constructor(
        private route:ActivatedRoute, 
        private api:Api, 
        private cartService:cartService,
        private toastr:ToastrService
      ){
        
      }

      ngOnInit(): void {
        this.route.params.subscribe((data) => {
        const id:string = data['id'];
        this.api.productById(id).subscribe((data:any) => {
          this.product = data.product
        })
        })
      }

      increaseQyt(){
        if (this.qty == this.product.stock){
          return;
        }
        this.qty = this.qty + 1;
      }

      decreaseQyt(){
        if (this.qty == 1){
          return;
        }
        this.qty = this.qty - 1;
      }

      addToCart(){
        const newCartItem = {
          product: this.product,
          qty: this.qty
        }
      if (this.product.stock == 0){
        this.toastr.error('Out of Stock!', 'SnapBuy')
        return;
      }
      
      this.cartService.addItem(newCartItem)
      this.toastr.success('Cart item added.', 'SnapBuy');
        
      }
}
