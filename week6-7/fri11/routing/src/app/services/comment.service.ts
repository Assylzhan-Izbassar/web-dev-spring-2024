import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly url = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) { }

  getComment(): Observable<any> {
    return this.http.get<Observable<any>>(this.url);
  }
}
