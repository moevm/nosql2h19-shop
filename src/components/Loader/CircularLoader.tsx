import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CircularLoader: React.FC = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  );
};

export default CircularLoader;
