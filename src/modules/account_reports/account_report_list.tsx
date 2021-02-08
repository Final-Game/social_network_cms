import React from "react";
import { List, Datagrid, EditButton, TextField, DateField, ReferenceField, SelectField, Filter, TextInput, SelectInput } from "react-admin";
import { REPORT_STATUS_CHOICES } from "./contants";

const AccountReportFilter = (props: any) => {
    return (
        <Filter {...props}>
            <TextInput label="Search" source="search" alwaysOn />
            <SelectInput label="Status" source="status" choices={REPORT_STATUS_CHOICES} alwaysOn />
        </Filter>
    )
}

export const AccountReportList = (props: any) => {
    return (
        <List filters={<AccountReportFilter />} {...props}>
            <Datagrid>
                <TextField source="short_id" />
                <ReferenceField label="Sender" source="sender_id" reference="user_accounts">
                    <TextField source="name" />
                </ReferenceField>
                <ReferenceField label="Receiver" source="receiver_id" reference="user_accounts">
                    <TextField source="name" />
                </ReferenceField>
                <SelectField source="status" choices={REPORT_STATUS_CHOICES} />
                <TextField source="short_reason" />
                <DateField source="created_date" />
                <DateField source="updated_date" />
                <EditButton />
            </Datagrid>
        </List>
    )
}
