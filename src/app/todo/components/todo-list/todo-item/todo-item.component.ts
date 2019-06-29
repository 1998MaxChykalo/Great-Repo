import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ITodo, id } from "../../../interfaces/itodo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html"
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Output() toggleTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() delete: EventEmitter<id> = new EventEmitter<id>();

  public toggleCompleted = () => this.toggleTodo.emit(this.todo);
  public deleteTodo = () => this.delete.emit(this.todo.id);
}
