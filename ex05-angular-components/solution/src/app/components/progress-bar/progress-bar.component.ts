import { Component, computed, input } from '@angular/core';
import { getRatio } from '../../logic/quiz-helpers';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  readonly total = input.required<number>();
  readonly value = input.required<number>();

  readonly ratio = computed(() => getRatio(this.value(), this.total()));
  readonly percentage = computed(() => `${this.ratio() * 100}%`);

}
