import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
      products = [
          {
              "_id": {
                "$oid": "688319e148711dabb882d860"
              },
              "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
              "price": 150.32,
              "description": "Minix watches are exclusively designed to fulfill the advanced tech needs of today’s generation.",
              "ratings": 3.5,
              "images": [
                {
                  "image": "/images/products/2.jpg"
                }
              ],
              "category": "Accessories",
              "seller": "Flipkart",
              "stock": 9
          },        
          {
  "_id": {
    "$oid": "688319e148711dabb882d85f"
  },
  "name": "OPPO F21s Pro 5G",
  "price": 245.67,
  "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
  "ratings": 4.5,
  "images": [
    {
      "image": "/images/products/1.jpg"
    },
    {
      "image": "/images/products/2.jpg"
    }
  ],
  "category": "Mobile Phones",
  "seller": "Amazon",
  "stock": "3"
}
      ]
}
