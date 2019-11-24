import React, { useEffect } from "react";
import { UsersDataState } from "../reducer";
import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import styled from "styled-components";
import { RouteComponentProps } from "react-router";

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
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

export interface UserPropsInterface {
  id: string;
  getUser: () => void;
  getUserTransactions: () => void;
  user: UsersDataState;
}

const User: React.FC<UserPropsInterface & RouteComponentProps<any>> = ({
  user,
  getUser,
  getUserTransactions,
  history
}) => {
  useEffect(() => {
    getUser();
    getUserTransactions();
  }, []);
  return (
    <>
      <Header>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{user.name}</Typography>
        <Button variant="contained">Статистика</Button>
      </Header>
      <Info>
        <div>Возраст:</div>
        <div>{user.age}</div>
        <div>Пол:</div>
        <div>{user.sex}</div>
        <div>Сумма трат:</div>
        <div>{user.spendings}</div>
      </Info>
    </>
  );
};

export default User;
