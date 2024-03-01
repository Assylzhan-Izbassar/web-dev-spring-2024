import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrl: './tab1.component.css'
})
export class Tab1Component {
  text: string = 'message';
  childText: string = '';
  posts: Post[] = [];

  constructor(private postService: PostService) {
    this.onLoad();
  }

  onChild(text: string) {
    this.childText = text;
  }

  private onLoad() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response['posts'];
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
