import { TodoList as TTodoList } from "../api/todoList/TodoList";

export const TODOLIST_TITLE_FIELD = "tItle";

export const TodoListTitle = (record: TTodoList): string => {
  return record.tItle || record.id;
};
