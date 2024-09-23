import { Component, output } from '@angular/core';
import { Post } from '../../models/post.model';
import { generateNewId } from '../../logic/id';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  readonly newPost = output<Post>();

  onSubmit(title: string, content: string) {
    const newPost: Post = {
      id: generateNewId(),
      title,
      content, 
      date: Date.now()
    }

    this.newPost.emit(newPost);
  }

}
