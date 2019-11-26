import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Button, Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MainTable, {
  MainTableColumns
} from "../../../components/Tabels/MainTable";
import { ListContainerStateToProps } from "./Container";
import {UsersDataState} from "../reducer";
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
    name: 'spendings',
    title: 'Сумма трат'
  }
];

interface ListProps extends ListContainerStateToProps {
  getUsers: () => void;
}

const List: React.FC<ListProps & RouteComponentProps<any>> = ({
  getUsers,
  users,
  isRequesting,
  history
}) => {
  const classes = useStyles();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <Typography variant="h5">Пользователи</Typography>
      <Paper className={classes.root} elevation={0}>
        <MainTable
          data={users}
          columns={columns}
          isRequesting={isRequesting}
          onClick={(item: UsersDataState) => history.push(`${routes.PATH_USERS}/${item.id}`)}
        />
      </Paper>
    </>
  );
};

export default withRouter<any, any>(List);
