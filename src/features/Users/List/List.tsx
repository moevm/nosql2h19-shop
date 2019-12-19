import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainTable, {
  MainTableColumns
} from "../../../components/Tabels/MainTable";
import { ListContainerStateToProps } from "./Container";
import { UsersDataState } from "../reducer";
import * as routes from "../../../constants/routes";
import CsvImport from "../../../components/Import/CsvImport";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
`;

const UserDocs = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: column;
`;

const columns: Array<MainTableColumns> = [
  {
    name: "name",
    title: "Пользователь"
  },
  {
    name: "age",
    title: "Возраст"
  },
  {
    name: "sex",
    title: "Пол"
  },
  {
    name: "spendings",
    title: "Сумма трат"
  }
];

interface ListProps extends ListContainerStateToProps {
  getUsers: () => void;
  importUsers: () => void;
  exportUsers: () => void;
}

const List: React.FC<ListProps & RouteComponentProps<any>> = ({
  getUsers,
  users,
  isRequesting,
  importUsers,
  exportUsers,
  history
}) => {
  const classes = useStyles();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Header>
        <Typography variant="h5">Пользователи</Typography>
        <UserDocs>
          <CsvImport onClick={importUsers} />
          <Button
            variant="contained"
            component="span"
            onClick={exportUsers}
          >
            Экспорт
          </Button>
        </UserDocs>
      </Header>
      <Paper className={classes.root} elevation={0}>
        <MainTable
          data={users}
          columns={columns}
          isRequesting={isRequesting}
          onClick={(item: UsersDataState) =>
            history.push(`${routes.PATH_USERS}/${item.id}`)
          }
        />
      </Paper>
    </>
  );
};

export default withRouter<any, any>(List);
