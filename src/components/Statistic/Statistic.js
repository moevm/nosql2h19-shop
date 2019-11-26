import React, { Component } from "react";
import Chart from "react-apexcharts";

class Statistic extends Component {
  constructor(props) {
    super(props);
    const { labels, series } = props;
    this.state = {
      options: {
        labels
      },
      series
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <div className="donut">
        <Chart options={options} series={series} type="pie" />
      </div>
    );
  }
}

export default Statistic;
