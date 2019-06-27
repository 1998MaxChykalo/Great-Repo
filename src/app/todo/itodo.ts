export type id = number;
export interface IIndexable {
  id: id;
}
export interface ITodo extends IIndexable{
  // id: id;
  name: string;
  isCompleted: boolean;
}
export interface ICreateTodoModel {
  name: string;
  isCompleted: boolean;
}
