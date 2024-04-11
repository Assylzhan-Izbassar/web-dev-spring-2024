import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly url = 'http://127.0.0.1:8000/store/products/';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get<Observable<any>>(this.url);
  }
}
