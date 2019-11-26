import React from 'react';
import { Layout } from './Layout';
import store from "./store";
import { Provider } from "react-redux";

import {getUsers} from "./features/Users/api";

const App: React.FC = () => {
    getUsers().then(res => res.json())
        .then(console.log)
  return (
      <Provider store={store}>
        <Layout />
      </Provider>
  );
}

export default App;
