import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {



  constructor() { }

  addTask(text: string){
    this.tasks$.next([...this.tasks$.value, text])
  }  

  tasks$ = new BehaviorSubject<string[]>([])
}

