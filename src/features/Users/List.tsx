import React, { useEffect } from "react";
import { Paper } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MainTable, {
  MainTableColumns,
  MainTableData
} from "../../components/Tabels/MainTable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      flexGrow: 1,
      marginTop: theme.spacing(3),
      overflowX: "auto"
    }
  })
);

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

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
  users: Array<MainTableData>;
}

const List: React.FC<ListProps> = ({ getUsers, users }) => {
  const classes = useStyles();
  useEffect(() => {
    getUsers()
  }, []);
  return (
    <Paper className={classes.root}>
      <MainTable data={users} columns={columns} />
    </Paper>
  );
};

export default List;
