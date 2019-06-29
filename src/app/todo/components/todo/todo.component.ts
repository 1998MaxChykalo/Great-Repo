import { Component } from "@angular/core";
import { TodoApiService } from "../../services/todo.api.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html"
})
export class TodoComponent {
  constructor(private todoApiService: TodoApiService) {}
  createTodo = this.todoApiService.create;
}
