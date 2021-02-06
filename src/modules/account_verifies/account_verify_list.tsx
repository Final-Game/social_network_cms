import React from "react";
import {
    Edit, List, Datagrid, Filter, TextInput, TextField, ReferenceField, DateField, SelectInput, ImageField, SelectField, SimpleForm, EditButton
} from "react-admin";

const VERIFY_STATUS_CHOICES = [
    { id: -1, name: "REJECTED" },
    { id: 0, name: "PENDING" },
    { id: 1, name: "VERIFED" }
]

const AccountVerifyFilter = (props: any) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="search" alwaysOn />
            <SelectInput label="Status" source="status" choices={VERIFY_STATUS_CHOICES} alwaysOn />
        </Filter>
    )
}

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


export const AccountVerifyList = (props: any) => {
    return (
        <List filters={<AccountVerifyFilter />} {...props}>
            <Datagrid>
                <TextField source="short_id" />
                <ReferenceField label="Account" source="account_id" reference="user_accounts">
                    <TextField source="name" />
                </ReferenceField>

                <ImageField source="front_photo_url" title="Front Photo" />
                <ImageField source="back_photo_url" title="Back Photo" />
                <SelectField source="status" choices={VERIFY_STATUS_CHOICES} />
                <DateField source="created_date" />
                <DateField source="updated_date" />
                <EditButton />
            </Datagrid>
        </List>
    )
}