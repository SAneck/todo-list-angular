import { TasksService } from './../tasks.service';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent {


  @Input()taskText = ''
  @Output()deleteTask = new EventEmitter()
  @Input() index = -1

  delete(index: number){
    this.deleteTask.emit(index)
  }

  constructor(private taskService: TasksService) {}

  openEdit():void {
    const newArr = this.taskService.tasks$.value.map((item, itemIndex) => {
      item.isEditing = false
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


