import React from 'react';
import './App.css';

import { Admin, Resource } from "react-admin";
import drfProvider from 'ra-data-drf';
import { UserAccountList } from './modules/user_accounts/user_account_list';
import { userAccountResource } from './modules/user_accounts';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ReportIcon from '@material-ui/icons/Report';
import { accountVerifyResource } from './modules/account_verifies';
import { accountReportResource } from './modules/account_reports';
import { Dashboard } from './modules/dashboards';

const dataProvider = drfProvider('http://127.0.0.1:8000/api');
const App = () => <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="user_accounts"  {...userAccountResource} icon={AccountBoxIcon} />
    <Resource name="account_verifies"  {...accountVerifyResource} icon={VerifiedUserIcon} />
    <Resource name="account_reports"  {...accountReportResource} icon={ReportIcon} />
</Admin>;


export default App;
