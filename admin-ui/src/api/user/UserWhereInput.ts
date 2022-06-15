import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TodoListListRelationFilter } from "../todoList/TodoListListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  todoLists?: TodoListListRelationFilter;
  username?: StringFilter;
};
