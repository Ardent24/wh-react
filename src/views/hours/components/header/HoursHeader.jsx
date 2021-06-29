import React from "react";
import styled from "styled-components";

const ThHours = styled.th`
  width: 6.5rem;
`;

const HoursHeader = () => {
  return (
    <thead>
      <tr>
        <th>Project And Phase</th>
        <th></th>
        <th>Task</th>
        <ThHours>Hours</ThHours>
        <th>Status</th>
        <th>Comment</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default HoursHeader;
