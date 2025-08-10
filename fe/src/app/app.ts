import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Api } from './api';
import { cartService } from './cart.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('fe');
  searchText: string = "";
  productsTemp:any = [];
  cartCount = 0

    constructor(private api: Api, private cartService:cartService){}

    ngOnInit(): void {
        this.cartService.currentSource.subscribe((data)=> {
          this.cartCount = data.length;
        })
    }

    search(){
        this.api.searchProduct(this.searchText)
      }

    clearSearch(){
      this.api.clearSearch(this.searchText)
    }

    searchByEnter(){
      this.search() 
    }
}
