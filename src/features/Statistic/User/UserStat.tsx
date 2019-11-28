import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import {
  createStyles,
  IconButton,
  makeStyles,
  Paper,
  Tabs,
  Theme,
  Typography,
  Tab,
  Button,
  Checkbox
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ListContainerStateToProps } from "./Container";
import styled from "styled-components";
import Statistic from "../../../components/Statistic/Statistic";
import CircularLoader from "../../../components/Loader/CircularLoader";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import StatisticGroup from "../Statistic/StatisticGroup";

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-gap: 20px;
`;

const DatePickerWrapper = styled.div`
  margin-top: 20px;
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
  getStatisticUserPeriod: (
    id: string,
    startDate: number | boolean,
    endDate: number | boolean
  ) => void;
}

const UserStat: React.FC<UserStatPropsInterface & RouteComponentProps<any>> = ({
  id,
  user,
  history,
  getStatisticUserAll,
  getStatisticUserPeriod,
  statistic,
  isRequesting
}) => {
  useEffect(() => {
    getStatisticUserAll(id);
  }, []);

  const handleGetStatAll = () => {
    getStatisticUserAll(id);
  };

  const handleGetStatPeriod = (
    startDate: number | boolean,
    endDate: number | boolean
  ) => {
    getStatisticUserPeriod(id, startDate, endDate);
  };

  return (
    <>
      <Header>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{user.name}</Typography>
      </Header>
      <StatisticGroup
        isRequesting={isRequesting}
        statistic={statistic}
        getAll={handleGetStatAll}
        getPeriod={handleGetStatPeriod}
      />
    </>
  );
};

export default UserStat;
