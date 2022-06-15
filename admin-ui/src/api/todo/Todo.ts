import { TodoList } from "../todoList/TodoList";

export type Todo = {
  createdAt: Date;
  description: string;
  id: string;
  status?: "Started" | "Completed" | "Paused" | null;
  todoList?: TodoList;
  updatedAt: Date;
};
