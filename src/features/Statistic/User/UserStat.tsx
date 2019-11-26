import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import {
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { ListContainerStateToProps } from "./Container";
import styled from "styled-components";
import Statistic from "../../../components/Statistic/Statistic";
import CircularLoader from "../../../components/Loader/CircularLoader";

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 20px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      flexGrow: 1,
      overflowX: "auto",
      overflowY: "hidden",
      marginTop: "20px"
    }
  })
);

export interface UserStatPropsInterface extends ListContainerStateToProps {
  id: string;
  getStatisticUserAll: (id: string) => void;
}

const UserStat: React.FC<UserStatPropsInterface & RouteComponentProps<any>> = ({
  id,
  user,
  history,
  getStatisticUserAll,
  statistic,
  isRequesting
}) => {
  useEffect(() => {
    getStatisticUserAll(id);
  }, []);
  const classes = useStyles();
  return (
    <>
      <Header>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{user.name}</Typography>
      </Header>
      <Paper className={classes.root} elevation={0}>
        {isRequesting ? (
          <CircularLoader />
        ) : (
          <Statistic
            labels={statistic.map(({ category }) => category)}
            series={statistic.map(({ quantity }) => quantity)}
          />
        )}
      </Paper>
    </>
  );
};

export default UserStat;
