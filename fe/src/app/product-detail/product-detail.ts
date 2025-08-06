import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
      product:any = null;
      qyt:any=1;
      constructor(private route:ActivatedRoute, private api:Api){
        
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
}
