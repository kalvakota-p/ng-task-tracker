import { Injectable } from '@angular/core';
import {observable, of} from 'rxjs';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
  }
}
