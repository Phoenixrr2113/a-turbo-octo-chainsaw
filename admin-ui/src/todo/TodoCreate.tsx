import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TodoListTitle } from "../todoList/TodoListTitle";

export const TodoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Started", value: "Started" },
            { label: "Completed", value: "Completed" },
            { label: "Paused", value: "Paused" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="todolist.id"
          reference="TodoList"
          label="TodoList"
        >
          <SelectInput optionText={TodoListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
