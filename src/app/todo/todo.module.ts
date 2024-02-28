import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyElementsModule } from '@angular-extensions/elements';

export const routes:Routes=[
  {
    path:"",
    component:TodoListComponent
  }
]

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LazyElementsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoModule { }
