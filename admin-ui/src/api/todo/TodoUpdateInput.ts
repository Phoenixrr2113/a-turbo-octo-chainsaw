import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoUpdateInput = {
  description?: string;
  status?: "Started" | "Completed" | "Paused" | null;
  todoList?: TodoListWhereUniqueInput;
};
