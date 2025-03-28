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

  tasks$ = new BehaviorSubject<Task[]>([]) 






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
    const arr = this.tasks$.value.map((item, itemIndex) => {
 
      if(index === itemIndex){
        return {
          ...item,
          isEditing: false,
          text: newText
        } 
      }else {
        return item
      }
    })
    this.tasks$.next(arr)
  }

}

//   addTask(text: string){
//     this.tasks$.next([...this.tasks$.value, text])
//   }  

//   tasks$ = new BehaviorSubject<string[]>([])
// }

