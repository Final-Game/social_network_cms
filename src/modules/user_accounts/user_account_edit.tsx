import { SimpleForm, TextInput, SelectInput, Edit } from "react-admin";
import { ACCOUNT_STATUS_CHOICES, MARITAL_STATUS_CHOICES } from "./contants";

export const UserAccountForm = (props: any) => {
    return (
        <SimpleForm {...props}>
            <TextInput source="id" label="Id" disabled />
            <TextInput source="name" label="Name" disabled />
            <TextInput source="avatar" label="Avatar" disabled />
            <TextInput source="phone_number" label="Phone Number" />
            <SelectInput source="marital_status" choices={MARITAL_STATUS_CHOICES} />
            <SelectInput source="status" label="Status" choices={ACCOUNT_STATUS_CHOICES} />
        </SimpleForm>
    )
}

export const UserAccountEdit = (props: any) => {
    return (
        <Edit {...props}>
            <UserAccountForm />
        </Edit>
    )
}