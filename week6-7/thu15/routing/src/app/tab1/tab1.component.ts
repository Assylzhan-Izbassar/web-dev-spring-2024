import { Product } from './../../../../../../../angular-example/my-app/src/app/models/product.model';
import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { ProductService } from '../services/product.service';
import { error } from 'console';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css',
})
export class Tab1Component {
  text: string = 'message';
  childText: string = '';
  posts: Post[] = [];
  products: Product[] = [];

  constructor(
    private postService: PostService,
    private productService: ProductService
  ) {
    this.onLoad();
  }

  onChild(text: string) {
    // this.childText = text;
  }

  private onLoad() {
    // this.postService.getPosts().subscribe({
    //   next: (response) => {
    //     this.posts = response['posts'];
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // });

    this.productService.getProducts().subscribe({
        next: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error);
            alert('Error with loading products');
        }
    });
  }
}
