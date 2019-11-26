import React from 'react';
import { Layout } from './Layout';
import store from "./store";
import { Provider } from "react-redux";
import fetchAPI from "./commons/api";

import {getUsers, getUser, getUserStatAllTime, getUserStatAllPeriod, getUserTransactions} from "./mocks";
import CsvInput from "./components/CsvImport/CsvImport";

const App: React.FC = () => {
    getUsers().then(res => console.log(res))
    getUser().then(res => console.log(res))
    getUserStatAllTime().then(res => console.log(res))
    getUserStatAllPeriod().then(res => console.log(res))
    getUserTransactions().then(res => console.log(res))


    // fetchAPI.get(
    //     `/users`
    // ).then(res => res.json())
    //     .then(res => console.log(res))
    //
    // fetchAPI.post(
    //     `/user`,
    //     {
    //         "id": "L1NuOy93H9bl36Fh9sSy"
    //     }
    // ).then(res => res.json())
    //     .then(res => console.log(res))
    //
    // fetchAPI.post(
    //     `/transactions`,
    //     {
    //         "id": "L1NuOy93H9bl36Fh9sSy"
    //     }
    // ).then(res => res.json())
    //     .then(res => console.log(res))
    //
    // fetchAPI.post(
    //     `/stat/all-time`,
    //     {
    //         "id": "L1NuOy93H9bl36Fh9sSy"
    //     }
    // ).then(res => res.json())
    //     .then(res => console.log(res))
    //
    // fetchAPI.post(
    //     `/stat/period`,
    //     {
    //         "id": "L1NuOy93H9bl36Fh9sSy",
    //         "startDate": "1573922367113",
    //         "endDate": "1575132356356"
    //     }
    // ).then(res => res.json())
    //     .then(res => console.log(res))

  return (
      <Provider store={store}>
        <Layout />
        <CsvInput />
      </Provider>
  );
}

export default App;
