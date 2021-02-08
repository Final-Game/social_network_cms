import React from "react"
import { List, Datagrid, Filter, TextInput, TextField, NumberField, DateField, SelectInput, ImageField, SelectField, EditButton } from 'react-admin';
import { ACCOUNT_STATUS_CHOICES, MARITAL_STATUS_CHOICES } from "./contants";

const UserAccountFilter = (props: any) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="search" alwaysOn />
            <SelectInput label="Marital status" source="marital_status" choices={
                MARITAL_STATUS_CHOICES
            } alwaysOn />
            <SelectInput label="Status" source="status" choices={ACCOUNT_STATUS_CHOICES} />

        </Filter>
    )
}


export const UserAccountList = (props: any) => {
    return (
        <List filters={<UserAccountFilter />} {...props}>
            <Datagrid>
                <TextField source="short_id" />
                <TextField source="name" />
                <ImageField source="avatar" label="Avatar" />
                <TextField source="phone_number" />
                <SelectField source="marital_status" choices={MARITAL_STATUS_CHOICES} />
                <SelectField source="status" choices={ACCOUNT_STATUS_CHOICES} />
                <NumberField source="age" />
                <DateField source="created_date" />
                <DateField source="updated_date" />
                <EditButton />
            </Datagrid>
        </List>
    )
}