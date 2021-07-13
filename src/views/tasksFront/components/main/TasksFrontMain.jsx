import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import TasksFrontBody from "./TasksFrontBody";
import {useSelector} from "react-redux";
import {isFilteredTasks} from "../../../../store/reducers/tasksReducer";

const TableWrap = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TasksFrontMain = () => {
  const stateTasks = useSelector(isFilteredTasks);

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
      {!stateTasks.length && <p className='text-center'>Ничего не найдено</p>}
    </TableWrap>
  );
};

export default TasksFrontMain;
