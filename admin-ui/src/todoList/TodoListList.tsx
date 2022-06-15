import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TodoListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TodoLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <DateField source="deletedAt" label="Deleted At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="TItle" source="tItle" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
