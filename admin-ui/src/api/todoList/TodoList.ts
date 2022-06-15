import { Todo } from "../todo/Todo";
import { User } from "../user/User";

export type TodoList = {
  createdAt: Date;
  deletedAt: Date;
  description: string | null;
  id: string;
  tItle: string;
  todos?: Array<Todo>;
  updatedAt: Date;
  user?: Array<User>;
};
