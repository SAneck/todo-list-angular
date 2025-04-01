import { FormControl } from '@angular/forms';
import { Task, TasksService } from './../tasks.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {

  tasks: Task[] = []



  newTaskText: FormControl<string | null> = new FormControl<string>('')

  constructor(public tasksService: TasksService){
    tasksService.tasks$.subscribe(value => {
      this.newTaskText.setValue(value.find(el => el.isEditing)?.text || '');
      this.tasks = value
    })
  }

  editTask(index: number){

    if (this.newTaskText === null) return alert('dfsaf');
    this.tasksService.editTask(this.newTaskText.value || '', index)
  }

  deleteTask(id: number){
    this.tasksService.deleteTask(id)
  }

}