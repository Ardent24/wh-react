import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import TasksFrontBody from "./TasksFrontBody";

const TableWrap = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TasksFrontMain = () => {
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
          <TasksFrontBody />
        </tbody>
      </Table>
    </TableWrap>
  );
};

export default TasksFrontMain;
