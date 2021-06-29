import React from "react";
import PropTypes from "prop-types";
import { cutTasksDate } from "../../../../modules/date";
import styled from "styled-components";

const TdColumn = styled.td`
  display: flex;
  flex-direction: column;
`;

const TasksItem = ({ data }) => {
  const status = data.currentStatus;
  const estimition = data.estimitionTime;
  const phase = data.phase.name;
  const { startDate, endDate, name, workedHours, description } = data;

  return (
    <tr>
      <TdColumn>
        <span>{cutTasksDate(startDate)}</span>
        <span>{cutTasksDate(endDate)}</span>
      </TdColumn>
      <td>{phase}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td>{estimition}</td>
      <td>{workedHours}</td>
    </tr>
  );
};

TasksItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TasksItem;
