import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { AnimateDeleteDirective} from './directives/delete.directive';
import { AnimateNewTaskDirective } from './directives/newTask.directive';
import { EditTaskDirective } from './directives/edit.directive';

import { HttpClientModule } from '@angular/common/http';
import { FilterTaskComponent } from './filter-task/filter-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListTaskComponent, 
    AnimateDeleteDirective,
    AnimateNewTaskDirective,
    EditTaskDirective,
    FilterTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
