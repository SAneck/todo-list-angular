import { FormControl } from '@angular/forms';
import { Task, TasksService } from './../tasks.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interval, merge, of, take } from 'rxjs';
@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent {


  @Input() taskText = ''
  @Output() deleteTask = new EventEmitter()
  @Input() index = -1

  visibleModal: boolean = false

  controlChecked: FormControl<boolean | null> = new FormControl<boolean | null>(false);

  @Input() checked: boolean = false

  @Input() date: Date | undefined;

  delete(index: number) {
    this.deleteTask.emit(index)
  }

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.controlChecked.setValue(this.checked)
    this.controlChecked.valueChanges.subscribe(val => this.taskService.editTask(this.taskText, this.index, val || false))
  }



  openEdit(): void {
    
    (this.taskService.tasks$ as any).next((this.taskService.tasks$ as any).value.map((item: Task, itemIndex: number) => {
      item.isEditing = false
      if (itemIndex === this.index) {
        return {
          ...item,
          isEditing: true
        }
      } else {
        return item
      }
    }))
  }

  showDialog() {
    this.visibleModal = true;
  }





  




}


