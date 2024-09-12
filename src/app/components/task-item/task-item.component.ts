import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  //@ts-ignore
  @Input() task: Task;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
