import { Component, signal } from '@angular/core';
import { PostListComponent } from './components/post-list/post-list.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { POSTS } from './data/posts.mock';
import { Post } from './models/post.model';
import { addPost, deletePost } from './logic/post-helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostListComponent, CreatePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly posts = signal(POSTS);

  addPost(post: Post) {
    this.posts.update(posts => addPost(posts, post));
  }

  deletePost(postId: number) {
    this.posts.update(posts => deletePost(posts, postId));
  }

}
