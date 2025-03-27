import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs';

export interface Task {
  text: string
  isEditing: boolean
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  addTask(text: string) {
    const arr = this.tasks$.value
    arr.push({text, isEditing: false})
    this.tasks$.next(arr)
  }

  deleteTask(ind: number){
    
    const arr = this.tasks$.value
    const newArr = arr.filter((_, index) => ind !== index)
    this.tasks$.next(newArr)
  }

  editTask(newText: string, index: number){
    console.log(index)
    console.log(this.tasks$.value)
    const arr = this.tasks$.value.map((item, itemIndex) => {
      console.log(index, itemIndex)
      if(index === itemIndex){
        console.log(123)
        return {
          ...item,
          text: newText
        } 
      }else {
        console.log(321)
        return item
      }
    })
    console.log(this.tasks$.value)
    this.tasks$.next(arr)
  }

  tasks$ = new BehaviorSubject<Task[]>([]) 
}

//   addTask(text: string){
//     this.tasks$.next([...this.tasks$.value, text])
//   }  

//   tasks$ = new BehaviorSubject<string[]>([])
// }

