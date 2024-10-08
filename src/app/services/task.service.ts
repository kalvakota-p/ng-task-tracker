import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  updateTask(task: Task): Observable<Task>{
    const url = `${this.api}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addtask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.api, task, httpOptions);
  }
}
