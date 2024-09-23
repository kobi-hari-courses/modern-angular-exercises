import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ALL_QUESTIONS } from './data/all-questions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly questions = signal(ALL_QUESTIONS);
  readonly answers = signal<number[]>([]);

  
}
