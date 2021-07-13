import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { cutTasksDate } from "../../../../modules/date";

const TdColumn = styled.td`
  display: flex;
  flex-direction: column;
`;

const TasksFrontItem = ({ data }) => {
  const status = data.currentStatus;
  const estimition = data.estimationTime;
  const phase = data?.phase?.name;
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

TasksFrontItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TasksFrontItem;
