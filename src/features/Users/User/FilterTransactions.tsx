import React, { useState } from "react";
import { FilterList } from "@material-ui/icons";
import {
  IconButton,
  Typography,
  Button,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import styled from "styled-components";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale
} from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "@material-ui/core/Checkbox";

registerLocale("ru", ru);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      backgroundColor: "white",
      justifySelf: "flex-end"
    }
  })
);

const FilterWrapper = styled.div`
  position: relative;
`;

const FilterContent = styled.div`
  position: absolute;
  top: -50%;
  right: 100%;
  width: 250px;
  height: 350px;
  background-color: whitesmoke;
  border: 1px solid #ccc;
  border-radius: 9px;
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 9px 12px;
  z-index: 2;
`;

const FilterDateSection = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 20px;
  margin-top: 12px;
`;

const FilterCategoriesList = styled.ul`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  width: 100%;
`;

const FilterCategoriesItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 1fr;
`;

export interface FilterInterface {
  startDate: number | undefined;
  endDate: number | undefined;
  categories: Array<string>;
}

export interface FilterTransactionsPropsInterface {
  categories: Array<string>;
  handleFilter: (filter: FilterInterface) => void;
}

const FilterTransactions: React.FC<FilterTransactionsPropsInterface> = ({
  handleFilter,
  categories
}) => {
  const [isOpenFilter, toggleFilter] = useState(false);
  const [startDate, handleStartDateChange] = useState();
  const [endDate, handleEndDateChange] = useState();
  const [pickedCategories, changeCategories] = useState([]);
  const classes = useStyles();
  const handleToggleCategories = (e: any) => {
    if (e.target.checked) {
      // @ts-ignore
      changeCategories([...pickedCategories, e.target.name]);
    }
    else
      changeCategories(pickedCategories.filter(
        pickedCategory => pickedCategory !== e.target.name
      ));
  };

  return (
    <FilterWrapper>
      <IconButton
        aria-label="filter list"
        onClick={() => toggleFilter(!isOpenFilter)}
      >
        <FilterList />
      </IconButton>
      {isOpenFilter && (
        <FilterContent>
          <Typography variant="h5">По дате</Typography>
          <FilterDateSection>
            <span>С</span>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              locale="ru"
            />
            <span>По</span>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              locale="ru"
            />
          </FilterDateSection>
          <Typography variant="h5">По категории</Typography>
          <FilterCategoriesList>
            {categories.map(category => (
              <FilterCategoriesItem key={category}>
                <Checkbox
                  checked={!!pickedCategories.find(item => item === category)}
                  name={category}
                  onChange={handleToggleCategories}
                />{" "}
                <span>{category}</span>
              </FilterCategoriesItem>
            ))}
          </FilterCategoriesList>
          <Button
            variant="contained"
            fullWidth
            className={classes.root}
            onClick={() =>
              handleFilter({
                startDate: startDate && startDate.getTime(),
                endDate: endDate && endDate.getTime(),
                categories: pickedCategories
              })
            }
          >
            Применить
          </Button>
        </FilterContent>
      )}
    </FilterWrapper>
  );
};

export default FilterTransactions;
