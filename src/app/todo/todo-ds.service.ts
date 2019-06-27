import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICreateTodoModel, id, IIndexable, ITodo} from './itodo';
const todos: ITodo[] = [
  {
    name: 'Complete task 1',
    isCompleted: true,
    id: 1
  },
  {
    name: 'Complete task 2',
    isCompleted: false,
    id: 2
  },
  {
    name: 'Complete task 3',
    isCompleted: false,
    id: 3
  }
];

const byId = <T extends IIndexable>(entityId: id) => (obj: T) => obj.id === entityId;

@Injectable({
  providedIn: 'root'
})
export class TodoDS {
  public todos: BehaviorSubject<ITodo[]> = new BehaviorSubject(todos);
  public todos$: Observable<ITodo[]> = this.todos.asObservable();

  toggleTodo(todoId: id) {
    const prevTodos = this.todos.getValue();
    const todoIndex = prevTodos.findIndex(byId(todoId));
    this.todos.next([
      ...prevTodos.slice(0, todoIndex),
      {...prevTodos[todoIndex], isCompleted: !prevTodos[todoIndex].isCompleted},
      ...prevTodos.slice(todoIndex + 1)
    ]);
  }
  deleteTodo(todoId: id) {
    const todoList = this.todos.getValue();
    const todoIndex = todoList.findIndex(byId(todoId));
    this.todos.next([
      ...todoList.slice(0, todoIndex),
      ...todoList.slice(todoIndex + 1)
    ]);
  }
  create(todo: ICreateTodoModel) {
    const todoList = this.todos.getValue();
    this.todos.next([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        ...todo
      }
    ]);
  }
}
