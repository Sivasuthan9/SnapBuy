import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../api';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit{
      product:any = null;

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
}
