import React, { useEffect } from "react";
import { ListContainerStateToProps } from "./Container";
import StatisticGroup from "./StatisticGroup";

export interface StatPropsInterface extends ListContainerStateToProps {
  getStatisticAll: () => void;
  getStatisticPeriod: (
    startDate: number | boolean,
    endDate: number | boolean
  ) => void;
}

const Statistic: React.FC<
    StatPropsInterface
> = ({
  getStatisticAll,
  getStatisticPeriod,
  statistic,
  isRequesting
}) => {
  useEffect(() => {
    getStatisticAll();
  }, []);

  const handleGetStatAll = () => {
    getStatisticAll();
  };

  const handleGetStatPeriod = (
    startDate: number | boolean,
    endDate: number | boolean
  ) => {
    getStatisticPeriod(startDate, endDate);
  };

  return (
    <>
      <StatisticGroup
        isRequesting={isRequesting}
        statistic={statistic}
        getAll={handleGetStatAll}
        getPeriod={handleGetStatPeriod}
      />
    </>
  );
};

export default Statistic;
