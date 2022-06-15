import { TodoListCreateNestedManyWithoutUsersInput } from "./TodoListCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  todoLists?: TodoListCreateNestedManyWithoutUsersInput;
  username: string;
};
