import { SortOrder } from "../../util/SortOrder";

export type TodoListOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  tItle?: SortOrder;
  updatedAt?: SortOrder;
};
