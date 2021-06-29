import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import TasksBody from "./TasksBody";

const TableWrap = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TasksMain = () => {
  return (
    <TableWrap>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Estimation</th>
            <th>Worked</th>
          </tr>
        </thead>
        <tbody>
          <TasksBody />
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default TasksMain;
