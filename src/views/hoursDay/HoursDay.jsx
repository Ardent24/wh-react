import React from "react";
import styled from "styled-components";
import HoursFooter from "./components/footer/HoursFooter";
import HoursBody from "./components/body/HoursBody";
import HoursDayHeader from "./components/header/HoursDayHeader";

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const HoursDay = () => {
  return (
    <Wrapper>
      <HoursDayHeader />
      <HoursBody />
      <HoursFooter />
    </Wrapper>
  );
};

export default HoursDay;
