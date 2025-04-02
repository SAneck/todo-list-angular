import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';


import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { SingleTaskComponent } from './single-task/single-task.component';
import { CountTasksComponent } from './count-tasks/count-tasks.component';
import { NgStyle } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    SingleTaskComponent,
    CountTasksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    ButtonModule, 
    TagModule,
    DataViewModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    CheckboxModule,
    NgStyle
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
                    