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
import styled from "styled-components";
import LinearLoader from "../Loader/LinearLoader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650
    },
    root: {
      width: "100%",
      height: 200,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

const useStylesCell = makeStyles({
  root: {
    padding: "0",
    border: "none",
    "&:last-child": {
      paddingRight: "0"
    }
  }
});

const StyledRow = styled(TableRow)`
  &:hover {
    cursor: pointer;
    background-color: ${props => (props.onClick ? "#efefef" : "inherit")};
  }
`;

export interface MainTableColumns {
  name: string;
  title: string;
  props?: object;
}

// TODO: https://github.com/microsoft/TypeScript/issues/15300
// export interface MainTableData {
//     [key: string]: string | number;
// }

export interface MainTableData {
  [key: string]: any;
}

interface MainTableProps {
  data: Array<MainTableData>;
  columns: Array<MainTableColumns>;
  onClick?: (...args: any[]) => any;
  isRequesting?: boolean;
}

const MainTable: React.FC<MainTableProps> = ({
  data,
  columns,
  onClick,
  isRequesting
}) => {
  const classes = useStyles();
  const classesCell = useStylesCell();
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
        {isRequesting !== undefined && isRequesting ? (
          <TableRow>
            <TableCell colSpan={columns.length} className={classesCell.root}>
              <LinearLoader />
            </TableCell>
          </TableRow>
        ) : (
          data.map((item, index) => (
            <StyledRow
              key={index}
              onClick={e => (onClick ? onClick(item) : e.preventDefault())}
            >
              {columns.map(column => (
                <TableCell key={column.name}>
                  {item.hasOwnProperty(column.name) ? item[column.name] : "-"}
                </TableCell>
              ))}
            </StyledRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default MainTable;
