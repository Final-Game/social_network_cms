import React from "react";
import {
    List, Datagrid, Filter, TextInput, TextField, ReferenceField, DateField, SelectInput, ImageField, SelectField, EditButton
} from "react-admin";
import { VERIFY_STATUS_CHOICES } from "./contants";

const AccountVerifyFilter = (props: any) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="search" alwaysOn />
            <SelectInput label="Status" source="status" choices={VERIFY_STATUS_CHOICES} alwaysOn />
        </Filter>
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