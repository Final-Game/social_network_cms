import React from "react"
import { List, Datagrid, Filter, TextInput, TextField, NumberField, DateField, SelectInput, ImageField, SelectField } from 'react-admin';

const MARITAL_STATUS_CHOICES = [
    { id: 1, name: "MARRIED" },
    { id: 0, name: "SINGLE" }
]

const UserAccountFilter = (props: any) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="search" alwaysOn />
            <SelectInput label="Marital status" source="marital_status" choices={
                MARITAL_STATUS_CHOICES
            } alwaysOn />

        </Filter>
    )
}


export const UserAccountList = (props: any) => {
    return (
        <List filters={<UserAccountFilter />} {...props}>
            <Datagrid>
                <TextField source="short_id" />
                <TextField source="name" />
                <ImageField source="avatar" title="Avatar" />
                <TextField source="phone_number" />
                <SelectField source="marital_status" choices={MARITAL_STATUS_CHOICES} />
                <NumberField source="age" />
                <DateField source="created_date" />
                <DateField source="updated_date" />
            </Datagrid>
        </List>
    )
}