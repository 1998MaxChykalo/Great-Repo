import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-list/todo-item/todo-item.component";
import { CreateTodoFormComponent } from "./components/create-todo-form/create-todo-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TodoComponent } from "./components/todo/todo.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    CreateTodoFormComponent,
    TodoComponent
  ],
  exports: [TodoListComponent, CreateTodoFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule]
})
export class TodoModule {}
