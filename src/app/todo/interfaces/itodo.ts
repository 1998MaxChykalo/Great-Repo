export type id = string;
export interface IIndexable {
  id: id;
}
export interface ITodo extends IIndexable {
  name: string;
  isCompleted: boolean;
}
export interface ICreateTodoModel {
  name: string;
  isCompleted: boolean;
}
