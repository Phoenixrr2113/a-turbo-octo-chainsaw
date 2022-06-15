import { TodoListUpdateManyWithoutUsersInput } from "./TodoListUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  todoLists?: TodoListUpdateManyWithoutUsersInput;
  username?: string;
};
