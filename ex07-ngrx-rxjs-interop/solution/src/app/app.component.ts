import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";
import { TasksStore } from './store/tasks.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  readonly store = inject(TasksStore);
  readonly isBusy = computed(() => this.store.loadState() === 'loading');
}
