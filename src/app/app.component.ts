import { Component } from '@angular/core';
import {TodoDS} from './todo/todo-ds.service';
import {ICreateTodoModel} from './todo/itodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTestProject';
  constructor(private todoDS: TodoDS) {}
  createTodo(todo: ICreateTodoModel) {
    this.todoDS.create(todo);
  }
}
