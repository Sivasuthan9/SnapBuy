import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Api } from '../api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
      products:any = []; //TODO: Handle with proper typing

      constructor(private api: Api){
         
      }

      ngOnInit(): void {
          this.api.getProducts().subscribe((data)=>{
            this.products = data.products;
          })
      }
}
