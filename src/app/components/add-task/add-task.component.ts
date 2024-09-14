import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  //@ts-ignore
  text: string;
  //@ts-ignore
  day: string;
  reminder: boolean = false;
  showAddTask: any;
  
  constructor(private uiService: UiService) { 
    uiService.onToggle().subscribe((value) => 
      (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
    
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
