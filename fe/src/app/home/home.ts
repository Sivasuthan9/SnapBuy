import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
      products:any = []; //TODO: Handle with proper typing
      searchText: string = "";

      constructor(private api: Api){
         
      }

      ngOnInit(): void {
          this.api.getProducts().subscribe((data)=>{
            this.products = data.products;
          })
      }

      search(){
        this.api.searchProduct(this.searchText).subscribe((data)=>{
          this.products = data.products;
        })
      }

      clearSearch(){
        if (this.searchText == ''){
          this.search() // This sends seperate API; insted, First fetched products can be used to update current products.
        }
      }

      searchByEnter(){
        this.search()
      }
}
