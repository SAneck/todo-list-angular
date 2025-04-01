import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, filter, Observable, Subject } from 'rxjs';

export interface Task {
  text: string
  isEditing: boolean
  isChecked: boolean
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$ = new BehaviorSubject<Task[]>([])

  addTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks$.value))
  }

  getTasksFromStorage() {
    const tasksFromStorage = localStorage.getItem('tasks')
    const parsed = JSON.parse(tasksFromStorage as any)
    this.tasks$.next(parsed || [])
  }

  addTask(text: string) {
    const arr = this.tasks$.value
    arr.push({ text, isEditing: false, isChecked: false })
    this.tasks$.next(arr)
    this.addTasksToStorage()
  }

  deleteTask(ind: number) {
    const arr = this.tasks$.value
    const newArr = arr.filter((_, index) => ind !== index)
    this.tasks$.next(newArr)
    this.addTasksToStorage()
  }

  editTask(newText: string, index: number, isChecked?: boolean) {


    console.log('abobA', isChecked)
    // const arr = this.tasks$.value.map((item, itemIndex) => {
    //   if (index === itemIndex) {
    //     return {
    //       ...item,
    //       isEditing: false,
    //       text: newText,
    //     }
    //   } else {
    //     return item
    //   }
    // })

    // this.tasks$.next(arr)
    // this.addTasksToStorage()
  }

}

//   addTask(text: string){
//     this.tasks$.next([...this.tasks$.value, text])
//   }  

//   tasks$ = new BehaviorSubject<string[]>([])
// }

