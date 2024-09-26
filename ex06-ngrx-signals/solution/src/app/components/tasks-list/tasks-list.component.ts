import { Component, computed, inject } from '@angular/core';
import { TasksStore } from '../../store/tasks.store';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  readonly store = inject(TasksStore);

  readonly taskIds = computed(() => this.store.tasks().map(t => t.id));

}
