
import { TasksService } from './tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-16';


  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksFromStorage()
  }

}