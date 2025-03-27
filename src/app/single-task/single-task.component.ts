import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent {


  @Input()item = ''
  @Output()deleteTask = new EventEmitter()
  @Input() index = -1

  delete(index: number){
    this.deleteTask.emit(index)
  }

  constructor(private taskService: TasksService) {}

  openEdit():void {
    const newArr = this.taskService.tasks$.value.map((item, itemIndex) => {
      if(itemIndex === this.index){
        return {
          ...item, 
          isEditing: true
        } 
      }else {
        return item
      }
    })
    this.taskService.tasks$.next(newArr)
  }
}


