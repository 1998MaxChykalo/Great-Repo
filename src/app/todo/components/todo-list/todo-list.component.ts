import { Component } from "@angular/core";
import { ITodo } from "../../interfaces/itodo";
import { TodoApiService } from "../../services/todo.api.service";
import { TodoDataService } from "../../services/todo.data.service";
import { isNull } from "util";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent {
  constructor(
    public todoApiService: TodoApiService,
    public todoDataService: TodoDataService
  ) {}
  public filterBy: boolean | null = null;
  public setFilter = (filter: boolean | null) => (this.filterBy = filter);
  public byCompleted = (todo: ITodo) =>
    isNull(this.filterBy) || todo.isCompleted === this.filterBy;

  toggleTodo(todo: ITodo) {
    this.todoApiService.update({
      ...todo,
      isCompleted: !todo.isCompleted
    });
  }
  deleteTodo = this.todoApiService.delete;
}
