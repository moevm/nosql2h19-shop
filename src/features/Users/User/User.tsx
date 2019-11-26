import React, { useEffect } from "react";
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
import { ListContainerStateToProps } from "./Container";
import MainTable, {
  MainTableColumns
} from "../../../components/Tabels/MainTable";
import routes from "../../../constants/routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      flexGrow: 1,
      overflowX: "auto",
      marginTop: "20px"
    }
  })
);

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

const columns: Array<MainTableColumns> = [
  {
    name: "id",
    title: "Номер транзакции"
  },
  {
    name: "category",
    title: "Категория"
  },
  {
    name: "date",
    title: "Дата"
  },
  {
    name: "amount",
    title: "Сумма"
  },
  {
    name: "accountId",
    title: "№ счета"
  }
];

export interface UserPropsInterface extends ListContainerStateToProps {
  id: string;
  getUser: (id: string) => void;
  getUserTransactions: (id: string) => void;
}

const User: React.FC<UserPropsInterface & RouteComponentProps<any>> = ({
  id,
  user,
  getUser,
  getUserTransactions,
  transactions,
  isRequestingTransactions,
  history
}) => {
  useEffect(() => {
    getUser(id);
    getUserTransactions(id);
  }, []);
  const classes = useStyles();
  return (
    <>
      <Header>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{user.name}</Typography>
        <Button
          variant="contained"
          onClick={() => history.push(`${routes.PATH_STATISTIC}/${id}`)}
        >
          Статистика
        </Button>
      </Header>
      <Info>
        <div>Возраст:</div>
        <div>{user.age}</div>
        <div>Пол:</div>
        <div>{user.sex}</div>
        <div>Сумма трат:</div>
        <div>{user.spendings}</div>
      </Info>
      <Paper className={classes.root} elevation={0}>
        <MainTable
          data={transactions.map(transaction => ({
            ...transaction,
            date: new Date(transaction.created._seconds*1000).toLocaleString("ru", {
              year: "numeric",
              month: "numeric",
              day: "numeric"
            })
          }))}
          columns={columns}
          isRequesting={isRequestingTransactions}
        />
      </Paper>
    </>
  );
};

export default User;
