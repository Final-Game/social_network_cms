import { SimpleForm, TextInput, SelectInput, Edit } from "react-admin";

import { VERIFY_STATUS_CHOICES } from "./contants"

export const AccountVerifyForm = (props: any) => {
    return (
        <SimpleForm {...props}>
            <TextInput source="id" label="Id" disabled />
            <SelectInput source="status" label="Status" choices={VERIFY_STATUS_CHOICES} />
        </SimpleForm>
    )
}

export const AccountVerifyEdit = (props: any) => {
    return (
        <Edit {...props}>
            <AccountVerifyForm />
        </Edit>
    )
}
