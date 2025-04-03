import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject, tap } from 'rxjs';

export interface Task {
  text: string
  isEditing: boolean
  isChecked: boolean
  date: Date
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {

 tasks$ = new BehaviorSubject<Task[]>([])

  taskCompletedCount$ = this.tasks$.pipe(
    map(tasks => tasks.filter((el: any) => el.isChecked).length)
  )
  taskUncompletedCount$ = this.tasks$.pipe(
    map(tasks => tasks.filter(el => !el.isChecked).length)
  )

  constructor(){
  }

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
    arr.push({ text, isEditing: false, isChecked: false, date: new Date() })
    this.tasks$.next(arr)
    this.addTasksToStorage()
    console.log(this.tasks$.value)
  }

  deleteTask(ind: number) {
    const arr = this.tasks$.value
    const newArr = arr.filter((_, index) => ind !== index)
    this.tasks$.next(newArr)
    this.addTasksToStorage()
  }

  editTask(newText: string, index: number, itemChecked?: boolean) {
    const arr = this.tasks$.value.map((item, itemIndex) => {
      // item.isChecked = false
      if (index === itemIndex) {
        return {
          ...item,
          isEditing: false,
          text: newText,
          isChecked: itemChecked === undefined ? item.isChecked : itemChecked
        } 
      }  else {
        return item
      }
    })
    this.tasks$.next(arr)
    this.addTasksToStorage()
  }

}

//   addTask(text: string){
//     this.tasks$.next([...this.tasks$.value, text])
//   }  

//   tasks$ = new BehaviorSubject<string[]>([])
// }

