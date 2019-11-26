import React from 'react';
import { Layout } from './Layout';
import store from "./store";
import { Provider } from "react-redux";
import CsvInput from "./components/CsvImport/CsvImport";

const App: React.FC = () => {

  return (
      <Provider store={store}>
        <Layout />
        <CsvInput />
      </Provider>
  );
}

export default App;
