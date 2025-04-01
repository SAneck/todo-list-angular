import { FormControl } from '@angular/forms';
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

  @Input() checked: boolean = false;
  
  
  checkedControl: FormControl<boolean | null> = new FormControl<boolean | null>(false);

  delete(index: number){
    this.deleteTask.emit(index)
  }

  constructor(private taskService: TasksService) {
  }
  
  ngOnInit() {
    alert(1231231231)
    this.checkedControl.patchValue(this.checked, {emitEvent: false})
    this.checkedControl.valueChanges.subscribe((isChecked) => {
      console.log('1231231', isChecked)
      this.taskService.editTask(this.taskText, this.index, isChecked || false)
    })
  }

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


