import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoListRelationFilter } from "../todo/TodoListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TodoListWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  tItle?: StringFilter;
  todos?: TodoListRelationFilter;
  user?: UserListRelationFilter;
};
