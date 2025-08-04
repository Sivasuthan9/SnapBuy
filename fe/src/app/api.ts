import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any>{ //TODO: Handle with proper typing
    return this.http.get(environment.apiUrl+'/api/v1/product')
  }

  searchProduct(searchText:string): Observable<any>{
    return this.http.get(environment.apiUrl+'/api/v1/product',
    {
      params: {keyword: searchText}
    })
  }
}
