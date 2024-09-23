import { Component, input, output } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  readonly posts = input.required<Post[]>();

  readonly deletePost = output<number>();

  onDeletePost(postId: number) {
    this.deletePost.emit(postId);
  }

}
