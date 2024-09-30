import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../tokens/base-url.token';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly http = inject(HttpClient);
  readonly baseUrl = inject(BASE_URL);

  getAllTasks(): Observable<Task[]> {
    const url = `${this.baseUrl}/tasks`;
    return this.http.get<Task[]>(url);
  }
  createNewTask(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/tasks`;
    return this.http.post<Task>(url, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/tasks/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${this.baseUrl}/tasks/${id}`;
    return this.http.delete<Task>(url);
  }

}
