import React from 'react';
import { Layout } from './Layout';
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Layout />
      </Provider>
  );
}

export default App;
