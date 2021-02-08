import { SimpleForm, TextInput, SelectInput, Edit, ReferenceInput } from "react-admin";
import { REPORT_STATUS_CHOICES } from "./contants";

export const AccountReportForm = (props: any) => {
    return (
        <SimpleForm {...props}>
            <TextInput source="id" label="Id" disabled />
            <ReferenceInput source="sender_id" label="Sender" reference="user_accounts" disabled>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="receiver_id" label="Receiver" reference="user_accounts" disabled>
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="reason" />
            <SelectInput source="status" choices={REPORT_STATUS_CHOICES} />
        </SimpleForm>
    )
}

export const AccountReportEdit = (props: any) => {
    return (
        <Edit {...props}>
            <AccountReportForm />
        </Edit>
    )
}