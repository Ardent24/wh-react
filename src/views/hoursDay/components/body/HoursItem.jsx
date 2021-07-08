import React from "react";
import styled from "styled-components";
import HoursBodyFooter from "./footer/HoursBodyFooter";

const Item = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #d3d7d9;
  border-radius: 7px;
  font-size: 1.1em;
  flex: 0 0 calc(33.33% - 2rem);
  min-width: 250px;

  &:nth-child(3n + 1) {
    margin-left: 0;
  }

  &:nth-child(1n + 3) {
    margin-right: 0;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eceff2;
`;

const HoursItem = ({ data, index }) => {
  return (
    <Item>
      <h4>Phase: {data?.phase?.name}</h4>
      <p>Task: {data?.task?.name}</p>
      <p>Time: {data?.amount}</p>
      <Line />
      <HoursBodyFooter index={index} />
    </Item>
  );
};

export default HoursItem;
