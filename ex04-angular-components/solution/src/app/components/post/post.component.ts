import { Component, computed, input } from '@angular/core';
import { Post } from '../../models/post.model';
import { wordsCount } from '../../logic/post-helpers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  readonly post = input.required<Post>();

  readonly wordsCount = computed(() => wordsCount(this.post().content));
}
