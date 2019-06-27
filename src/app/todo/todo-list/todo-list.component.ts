import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoDS} from '../todo-ds.service';
import {id, ITodo} from '../itodo';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  private todoList: ITodo[] = [];
  private sub: Subscription;
  constructor(private todoDS: TodoDS) { }

  ngOnInit() {
    this.sub = this.todoDS.todos$.subscribe(todos => this.todoList = todos);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  toggleTodo(todoId: id) {
    this.todoDS.toggleTodo(todoId);
  }
  deleteTodo(todoId: id) {
    this.todoDS.deleteTodo(todoId);
  }

}
