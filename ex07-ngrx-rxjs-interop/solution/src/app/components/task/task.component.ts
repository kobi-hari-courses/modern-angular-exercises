import { Component, computed, inject, input } from '@angular/core';
import { TasksStore } from '../../store/tasks.store';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  readonly id = input.required<number>();
  readonly store = inject(TasksStore);

  readonly task = computed(() => this.store.tasks().find(t => t.id === this.id())!);
  readonly stateImage = computed(() => this.task().completed
  ? 'check-square.svg'
  : 'square.svg');
}
