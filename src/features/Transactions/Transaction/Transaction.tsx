import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { ListContainerStateToProps } from "./Container";
import { Button, IconButton, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import * as routes from "../../../constants/routes";
import styled from "styled-components";
import { TransactionDataState } from "../reducer";
import CircularLoader from "../../../components/Loader/CircularLoader";

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 20px;
`;

const Info = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 14px;
  font-size: 14px;
`;

export interface TransactionPropsInterface extends ListContainerStateToProps {
  id: string;
  getTransaction: (id: string) => {};
}

const Transaction: React.FC<
  TransactionPropsInterface & RouteComponentProps<any>
> = ({ getTransaction, id, history, transaction, isRequesting }) => {
  useEffect(() => {
    getTransaction(id);
  }, []);
  console.log(isRequesting);
  return (
    <>
      {isRequesting ? (
        <CircularLoader />
      ) : (
        <>
          <Header>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h5">№ {transaction.id}</Typography>
          </Header>
          <Info>
            <div>Категория:</div>
            <div>{transaction.category}</div>
            <div>Сумма:</div>
            <div>{transaction.amount}</div>
            <div>Дата:</div>
            <div>
              {new Date(transaction.created._seconds * 1000).toLocaleString(
                "ru",
                {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric"
                }
              )}
            </div>
            <div>Номера счета:</div>
            <div>{transaction.accountId}</div>
          </Info>
        </>
      )}
    </>
  );
};

export default Transaction;
