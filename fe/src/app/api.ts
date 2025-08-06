import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs'; // ?????

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  constructor(private http: HttpClient) {}

  productSource = new BehaviorSubject([]);
  currentProducts = this.productSource.asObservable(); // ????
  productTemp = [];
  
  getProducts(){ //TODO: Handle with proper typing
    this.http.get(environment.apiUrl+'/api/v1/product').subscribe((data: any) => {
      this.productSource.next(data)
      this.productTemp = data;
    })
  }

  searchProduct(searchText:string){
    this.http.get(environment.apiUrl+'/api/v1/product',
    {
      params: {keyword: searchText}
    }).subscribe((data: any) => {
      this.productSource.next(data)
    })
  }

  clearSearch(searchText:string){
      if (searchText == ''){
        this.productSource.next(this.productTemp)
      }
    }

  }