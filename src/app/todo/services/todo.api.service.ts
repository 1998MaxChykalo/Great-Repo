import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ICreateTodoModel, ITodo, id } from "../interfaces/itodo";

@Injectable({
  providedIn: "root"
})
export class TodoApiService {
  private todoCollectionWithoutId = this.db.collection<ICreateTodoModel>(
    "/todos"
  );

  constructor(private db: AngularFirestore) {}
  public create = (todo: ICreateTodoModel) =>
    this.todoCollectionWithoutId.add(todo);
  public delete = (todoId: id) =>
    this.todoCollectionWithoutId.doc(todoId).delete();
  public update = (todo: ITodo) =>
    this.todoCollectionWithoutId.doc(todo.id).set(todo);
}
