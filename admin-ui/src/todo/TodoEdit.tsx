import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TodoListTitle } from "../todoList/TodoListTitle";

export const TodoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
