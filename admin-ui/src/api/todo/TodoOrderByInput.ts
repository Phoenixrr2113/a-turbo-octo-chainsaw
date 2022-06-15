import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  todoListId?: SortOrder;
  updatedAt?: SortOrder;
};
