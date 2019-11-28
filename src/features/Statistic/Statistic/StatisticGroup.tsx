import React, { useEffect, useState } from "react";
import {
  createStyles,
  makeStyles,
  Paper,
  Tabs,
  Theme,
  Tab,
  Button,
  Checkbox
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import styled from "styled-components";
import Statistic from "../../../components/Statistic/Statistic";
import CircularLoader from "../../../components/Loader/CircularLoader";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { StatisticDataState } from "../reducer";

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

export interface StatGroupPropsInterface {
  statistic: Array<StatisticDataState>;
  isRequesting: boolean;
  getAll: () => void;
  getPeriod: (startDate: number | boolean, endDate: number | boolean) => void;
}

const StatisticGroup: React.FC<
    StatGroupPropsInterface
> = ({ getAll, getPeriod, statistic, isRequesting }) => {
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
        getAll();
        break;
      case 1:
        handleGetStatPeriod();
        break;
    }
  };

  const handleGetStatPeriod = () => {
    getPeriod(
      isStartDate && startDate!.getTime(),
      isEndDate && endDate!.getTime()
    );
    handleIsGetStatisticUserPeriod(true);
  };

  return (
    <>
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

export default StatisticGroup;
