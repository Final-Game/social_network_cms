import { TextInput, SelectInput, Edit, TabbedForm, FormTab } from "react-admin";
import { ACCOUNT_STATUS_CHOICES, MARITAL_STATUS_CHOICES } from "./contants";

export const UserAccountForm = (props: any) => {
    return (
        <TabbedForm {...props}>
            <FormTab label="Basic Info">
                <TextInput source="id" label="Id" disabled />
                <TextInput source="name" label="Name" disabled />
                <TextInput source="avatar" label="Avatar" disabled />
                <TextInput source="phone_number" label="Phone Number" />
                <SelectInput source="marital_status" choices={MARITAL_STATUS_CHOICES} disabled />
                <SelectInput source="status" label="Status" choices={ACCOUNT_STATUS_CHOICES} />
            </FormTab>
        </TabbedForm>
    )
}

export const UserAccountEdit = (props: any) => {
    return (
        <Edit {...props}>
            <UserAccountForm />
        </Edit>
    )
}