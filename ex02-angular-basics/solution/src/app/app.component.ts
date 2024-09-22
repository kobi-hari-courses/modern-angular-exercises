import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { tasks } from './models/task.model';
import { addTask, markTaskAsCompleted } from './logic/task-helpers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly tasks = signal(tasks);

  // action - complete task
  completeTask(name: string) {
    this.tasks.update(value => markTaskAsCompleted(value, name));
  }

  addTask(name: string) {
    this.tasks.update(value => addTask(value, name));
  }


}
