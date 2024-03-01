import { Component } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrl: './tab2.component.css'
})
export class Tab2Component {

  comments: Comment[] = [];

  constructor(private commentServices: CommentService) {
    this.onLoad();
  }

  private onLoad(): void {
    this.commentServices.getComment().subscribe({
      next: (response) => {
        this.comments = response['comments'];
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.commentServices.getComment().pipe
  }
}
