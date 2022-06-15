import { TodoList } from "../todoList/TodoList";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  todoLists?: Array<TodoList>;
  updatedAt: Date;
  username: string;
};
