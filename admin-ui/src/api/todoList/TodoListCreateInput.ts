import { TodoCreateNestedManyWithoutTodoListsInput } from "./TodoCreateNestedManyWithoutTodoListsInput";
import { UserCreateNestedManyWithoutTodoListsInput } from "./UserCreateNestedManyWithoutTodoListsInput";

export type TodoListCreateInput = {
  deletedAt: Date;
  description?: string | null;
  tItle: string;
  todos?: TodoCreateNestedManyWithoutTodoListsInput;
  user?: UserCreateNestedManyWithoutTodoListsInput;
};
