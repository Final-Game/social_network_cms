import React from 'react';
import './App.css';

import { Admin } from "react-admin";
import drfProvider from 'ra-data-drf';

const dataProvider = drfProvider('https://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider} />;


export default App;
