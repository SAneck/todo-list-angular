import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskText: FormControl<string | null> = new FormControl<string>('')

  constructor(private tasksService: TasksService) { 
  }

  addTask() {
    if (this.taskText.value === null) return alert('Govno')
    this.tasksService.addTask(this.taskText.value)
    this.taskText.reset()
  }
}
