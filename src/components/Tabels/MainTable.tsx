import React from "react";
import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650
    }
  })
);

export interface MainTableColumns {
  name: string;
  title: string;
  props?: object;
}

export interface MainTableData {
  [key: string]: string | number;
}

interface MainTableProps {
  data: Array<MainTableData>;
  columns: Array<MainTableColumns>;
}

const MainTable: React.FC<MainTableProps> = ({ data, columns }) => {
  const classes = useStyles();
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell key={column.name}>{column.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {columns.map(column => (
              <TableCell key={column.name}>
                {item.hasOwnProperty(column.name) ? item[column.name] : "-"}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MainTable;
