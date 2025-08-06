import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fe');
  searchText: string = "";
  productsTemp:any = [];

    constructor(private api: Api){}

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
