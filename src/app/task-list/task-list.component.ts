import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Task, TasksService } from './../tasks.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {

  tasks$: Observable<Task[]> | undefined;

  completed$: Observable<number> | undefined
  uncompleted$: Observable<number> | undefined

  newTaskText: FormControl<string | null> = new FormControl<string>('')

  constructor(public tasksService: TasksService){
     this.tasks$ = this.tasksService.tasks$
     this.completed$ = tasksService.taskCompletedCount$
     this.uncompleted$ = tasksService.taskUncompletedCount$
  }

  editTask(index: number){  

    if (this.newTaskText === null) return alert('dfsaf');
    this.tasksService.editTask(this.newTaskText.value || '', index)
  }

  deleteTask(id: number){
    this.tasksService.deleteTask(id)
  }

}