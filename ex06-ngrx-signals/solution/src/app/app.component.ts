import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
}
