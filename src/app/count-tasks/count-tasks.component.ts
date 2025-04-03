import { Component, Input, SimpleChanges } from '@angular/core';
import { TasksService } from '../tasks.service';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-count-tasks',
  templateUrl: './count-tasks.component.html',
  styleUrls: ['./count-tasks.component.scss']
})
export class CountTasksComponent {

  @Input() countCompleted: number | null= 0
  @Input() countUncompleted: number | null = 0

  constructor(private taskService: TasksService){
  }

}
