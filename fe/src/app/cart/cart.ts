import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit{
    cartItems = [
            {product : {
        "_id": "688319e148711dabb882d863",
        "name": "ASUS VivoBook 15 Laptop",
        "price": 767.32,
        "description": "ASUS VivoBook 15 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W",
        "ratings": 5,
        "images": [
          {
            "image": "/images/products/7.jpg"
          }
        ],
        "category": "Laptops",
        "seller": "Ebay",
        "stock": 9
                      },
            qty : 2},

            {product : {
              "_id": "688319e148711dabb882d865",
              "name": "Campus Men's Maxico Running Shoes",
              "price": 10.12,
              "description": "The high raised back cover with extra padding.",
              "ratings": 3,
              "images": [
                {
                  "image": "/images/products/5.jpg"
                }
              ],
              "category": "Sports",
              "seller": "Ebay",
              "stock": 6
            },
            qty : 4}
    ]
    cartCount = 0;
    subTotal = 0;
    estTotal = 0;

    ngOnInit(): void {
        this.cartCount = this.cartItems.length;
        this.subTotal = this.cartItems.reduce((acc:any, current:any) => {
                                        return acc + current.qty;
                                      }, 0);
        this.estTotal = this.cartItems.reduce((acc:any, current:any) => {
                                        return acc + (current.product.price*current.qty);
                                      }, 0)
                                  
    }
}
