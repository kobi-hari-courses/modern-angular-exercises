import { Component, computed, ElementRef, inject, viewChild } from '@angular/core';
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
  readonly addInput = viewChild.required('addTask', { read: ElementRef<any>});

  readonly taskIds = computed(() => this.store.filteredTasks().map(t => t.id));

  onAddTask() {
    const input = this.addInput().nativeElement as HTMLInputElement;
    const title = input.value.trim();
    this.store.addTask(title);

    input.value = '';
  }

  setFilter(filter: string) {
    this.store.setFilter(filter);
  }

}
