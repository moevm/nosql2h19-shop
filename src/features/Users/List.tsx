import React, { useEffect } from "react";
import {Paper, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import MainTable, { MainTableColumns } from "../../components/Tabels/MainTable";
import { UsersDataState } from "./reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      flexGrow: 1,
      overflowX: "auto",
      marginTop: '20px'
    }
  })
);

const columns: Array<MainTableColumns> = [
  {
    name: "fullName",
    title: "Пользователь"
  },
  {
    name: "age",
    title: "Возраст"
  },
  {
    name: "sex",
    title: "Пол"
  }
];

interface ListProps {
  getUsers: () => void;
  users: Array<UsersDataState>;
}

const List: React.FC<ListProps> = ({ getUsers, users }) => {
  const classes = useStyles();
  useEffect(() => {
    getUsers()
  }, []);
  return (
      <>
        <Typography variant='h5'>Пользователи</Typography>
        <Paper className={classes.root} elevation={0}>
          <MainTable data={users} columns={columns} />
        </Paper>
      </>
  );
};

export default List;
