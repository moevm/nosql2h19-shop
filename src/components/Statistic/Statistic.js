import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 400px;
`

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
      <Wrapper>
        <Chart options={options} series={series} type="pie" />
      </Wrapper>
    );
  }
}

export default Statistic;
