import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _baseUrl = 'http://127.0.0.1:8000/store/products/'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<Observable<any> >(this._baseUrl);
  }
}
