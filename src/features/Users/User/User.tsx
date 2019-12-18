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
import * as routes from "../../../constants/routes";
import CsvImport from "../../../components/Import/CsvImport";
import CircularLoader from "../../../components/Loader/CircularLoader";
import { TransactionDataState } from "../../Transactions/reducer";
import FilterTransactions, { FilterInterface } from "./FilterTransactions";
import { GetTransactionsUserAllOptions } from "../../Transactions/actions";

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

const ButtonGroupImport = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
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
  getUserTransactions: (
    id: string,
    options?: GetTransactionsUserAllOptions | null,
    filter?: FilterInterface
  ) => void;
  importTransactions: (file: File, id: string) => void;
}

const User: React.FC<UserPropsInterface & RouteComponentProps<any>> = ({
  id,
  user,
  getUser,
  getUserTransactions,
  transactions,
  isRequestingTransactions,
  isRequesting,
  history,
  importTransactions
}) => {
  useEffect(() => {
    getUser(id);
    getUserTransactions(id);
  }, []);
  const classes = useStyles();

  const handleFilter = (filter: FilterInterface) => {
    getUserTransactions(id, null, filter);
  };

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
            <div>Номера счетов:</div>
            <div>{user.accounts.join()}</div>
          </Info>
        </>
      )}
      <ButtonGroupImport>
        <CsvImport onClick={file => importTransactions(file, id)} />
        <FilterTransactions handleFilter={handleFilter} />
      </ButtonGroupImport>
      <Paper className={classes.root} elevation={0}>
        <MainTable
          data={transactions.map(transaction => ({
            ...transaction,
            date: new Date(transaction.created._seconds * 1000).toLocaleString(
              "ru",
              {
                year: "numeric",
                month: "numeric",
                day: "numeric"
              }
            )
          }))}
          onClick={(item: TransactionDataState) =>
            history.push(`${routes.PATH_TRANSACTIONS}/${item.id}`)
          }
          columns={columns}
          isRequesting={isRequestingTransactions}
        />
      </Paper>
    </>
  );
};

export default User;
