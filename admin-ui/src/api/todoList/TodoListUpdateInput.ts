import { TodoUpdateManyWithoutTodoListsInput } from "./TodoUpdateManyWithoutTodoListsInput";
import { UserUpdateManyWithoutTodoListsInput } from "./UserUpdateManyWithoutTodoListsInput";

export type TodoListUpdateInput = {
  deletedAt?: Date;
  description?: string | null;
  tItle?: string;
  todos?: TodoUpdateManyWithoutTodoListsInput;
  user?: UserUpdateManyWithoutTodoListsInput;
};
