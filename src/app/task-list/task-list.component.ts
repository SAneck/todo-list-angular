import { ReplaySubject, Subject } from 'rxjs';
import { TasksService } from './../tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  tasks: string[] = []

  constructor(public tasksService: TasksService){
      tasksService.tasks$.subscribe(v => this.tasks =v )
  }

  

}

function func(a: number, c: number): number{
  return a + c
}