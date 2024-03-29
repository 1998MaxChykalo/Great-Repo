import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { isRequired } from "../../../validators/isRequired";
import { ICreateTodoModel } from "../../interfaces/itodo";

@Component({
  selector: "app-create-todo-form",
  templateUrl: "./create-todo-form.component.html",
  styleUrls: ["./create-todo-form.component.css"]
})
export class CreateTodoFormComponent {
  @Output() create: EventEmitter<ICreateTodoModel> = new EventEmitter<
    ICreateTodoModel
  >();

  createTodoForm = this.fb.group({
    isCompleted: [false],
    name: ["", Validators.required]
  });

  isRequired = isRequired(this.createTodoForm);

  constructor(private fb: FormBuilder) {}

  createTodo() {
    this.create.emit(this.createTodoForm.value);
    this.createTodoForm.reset();
    this.createTodoForm.markAsUntouched();
    this.createTodoForm.markAsPristine();
  }
}
