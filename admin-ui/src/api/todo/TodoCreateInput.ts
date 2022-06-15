import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoCreateInput = {
  description: string;
  status?: "Started" | "Completed" | "Paused" | null;
  todoList: TodoListWhereUniqueInput;
};
