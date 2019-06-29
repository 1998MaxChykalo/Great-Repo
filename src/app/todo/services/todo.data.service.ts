import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITodo } from "../interfaces/itodo";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  public todos$: Observable<ITodo[]>;

  private todoCollection = this.db.collection<ITodo>("/todos");

  constructor(private db: AngularFirestore) {
    this.todos$ = this.todoCollection.snapshotChanges().pipe(
      map(items =>
        items.map(item => ({
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }))
      )
    );
  }
}
