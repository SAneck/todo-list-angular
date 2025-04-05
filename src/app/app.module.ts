import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule
    // поговорить про концепцию модулей в ангулярое
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
                    