import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoItemComponent} from './todo-list/todo-item/todo-item.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CreateTodoFormComponent
  ],
  exports: [
    TodoListComponent,
    CreateTodoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
