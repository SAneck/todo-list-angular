import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddTaskComponent } from './add-task/add-task.component';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { SingleTaskComponent } from './single-task/single-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    SingleTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiInputModule,
    TuiButtonModule,
    ReactiveFormsModule, 
    TuiIslandModule,  
    TuiRootModule,
    TuiDialogModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
                    