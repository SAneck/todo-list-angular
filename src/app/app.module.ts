import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddTaskComponent } from './add-task/add-task.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiInputModule,
    TuiButtonModule,ReactiveFormsModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
                    