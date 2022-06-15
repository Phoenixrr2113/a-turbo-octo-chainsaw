import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TODOLIST_TITLE_FIELD } from "./TodoListTitle";

export const TodoListShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <DateField source="deletedAt" label="Deleted At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="TItle" source="tItle" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Todo" target="TodoListId" label="Todos">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="TodoList"
              source="todolist.id"
              reference="TodoList"
            >
              <TextField source={TODOLIST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
