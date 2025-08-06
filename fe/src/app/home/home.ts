import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
      products:any = []; //TODO: Handle with proper typing
      searchText: string = "";

      constructor(private api: Api){
         
      }

     ngOnInit(): void {
          this.api.getProducts();
          this.api.currentProducts.subscribe((data:any) => { // sent data is accessed by subscribe here.
                      this.products = data.products;
})
}}
