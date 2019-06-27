import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo, id} from '../../itodo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() toggleTodo: EventEmitter<id> = new EventEmitter<id>();
  @Output() delete: EventEmitter<id> = new EventEmitter<id>();

  ngOnInit() {
  }
  public toggleCompleted = () => this.toggleTodo.emit(this.todo.id);
  public deleteTodo = () => this.delete.emit(this.todo.id);
}
