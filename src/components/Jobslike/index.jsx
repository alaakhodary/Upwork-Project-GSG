import React from "react";
import BasicTabs from "../Tab";

import styled from "styled-components";

const Job = styled.div`
  width: 820px;
  border: 1px solid #e4ebe4;
  margin-top: 35px;
  border-radius: 10px;
`;

const Titles = styled.h3`
  letter-spacing: 2px;
  font-size: 28px;
  margin-left: 10px;
  font-weight: 700;
  padding: 10px;
`;

const Jobsliked = () => {
  return (
    <Job>
      <Titles>Jobs you might like</Titles>
      <BasicTabs />
    </Job>
  );
};

export default Jobsliked;
