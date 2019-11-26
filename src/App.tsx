import React from 'react';
import { Layout } from './Layout';
import store from "./store";
import { Provider } from "react-redux";
import CsvInput from "./components/CsvImport/CsvImport";

import {getUsers} from "./features/Users/api";

const App: React.FC = () => {
    getUsers().then(res => res.json())
        .then(console.log)
  return (
      <Provider store={store}>
        <Layout />
        <CsvInput />
      </Provider>
  );
}

export default App;
