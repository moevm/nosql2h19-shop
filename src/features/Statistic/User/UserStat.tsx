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
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [startDate, handleStartDateChange] = useState<MaterialUiPickersDate>(
    new Date()
  );
  const [endDate, handleEndDateChange] = useState<MaterialUiPickersDate>(
    new Date()
  );
  const [isStartDate, handleIsStartDateChange] = useState(true);
  const [isEndDate, handleIsEndDateChange] = useState(true);
  const [isGetStatisticUserPeriod, handleIsGetStatisticUserPeriod] = useState(
    false
  );

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        getStatisticUserAll(id);
        break;
      case 1:
        handleGetStatPeriod();
        break;
    }
  };

  const handleGetStatPeriod = () => {
    getStatisticUserPeriod(
      id,
      isStartDate && startDate!.getTime(),
      isEndDate && endDate!.getTime()
    );
    handleIsGetStatisticUserPeriod(true);
  };

  return (
    <>
      <Header>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">{user.name}</Typography>
      </Header>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="За все время" />
          <Tab label="По дням" />
        </Tabs>
      </Paper>
      <Paper className={classes.root} elevation={0}>
        {isRequesting ? (
          <CircularLoader />
        ) : value === 0 ? (
          <Statistic
            labels={statistic.map(({ category }) => category)}
            series={statistic.map(({ amount }) => amount)}
          />
        ) : (
          <DatePickerWrapper>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Checkbox
                checked={isStartDate}
                onChange={({ target: { checked } }) =>
                  handleIsStartDateChange(checked)
                }
              />
              <DatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Выберите дату начала"
                format="MM/dd/yyyy"
                value={startDate}
                onChange={handleStartDateChange}
              />
              <Checkbox
                checked={isEndDate}
                onChange={({ target: { checked } }) =>
                  handleIsEndDateChange(checked)
                }
              />
              <DatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Выберите дату окончания"
                format="MM/dd/yyyy"
                value={endDate}
                onChange={handleEndDateChange}
              />
              <Button onClick={handleGetStatPeriod}>Подобрать</Button>
            </MuiPickersUtilsProvider>
            {isGetStatisticUserPeriod && (
              <Statistic
                labels={statistic.map(({ category }) => category)}
                series={statistic.map(({ amount }) => amount)}
              />
            )}
          </DatePickerWrapper>
        )}
      </Paper>
    </>
  );
};

export default UserStat;
