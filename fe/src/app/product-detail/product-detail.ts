import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';
import { Cart } from '../cart';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, ToastrModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
      product:any = null;
      qyt:any=1;
      constructor(
        private route:ActivatedRoute, 
        private api:Api, 
        private cart:Cart,
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
        if (this.qyt == this.product.stock){
          return;
        }
        this.qyt = this.qyt + 1;
      }

      decreaseQyt(){
        if (this.qyt == 1){
          return;
        }
        this.qyt = this.qyt - 1;
      }

      addToCart(){
        const newCartItem = {
          product: this.product,
          qyt: this.qyt
        }
      
      this.cart.addItem(newCartItem)
      this.toastr.success('Cart item added.', 'SnapBuy');
        
      }
}
