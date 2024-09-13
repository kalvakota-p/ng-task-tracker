import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, observable, of} from 'rxjs';
import {Task} from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api: string = 'http://localhost:5001/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.api}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
