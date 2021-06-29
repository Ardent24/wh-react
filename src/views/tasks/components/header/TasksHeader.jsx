import React from "react";
import styled from "styled-components";
import TasksPlus from "../svg/TasksPlus";
import { useDispatch } from "react-redux";
import {
  handleModal,
  showContentCreateTask,
} from "../../../../store/reducers/modalReducer";
import { responseTasks } from "../../../../store/reducers/tasksReducer";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 3rem;
  height: 3rem;

  & svg {
    transition: opacity 0.4s;
    color: #1797d2;
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

const TasksHeader = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(handleModal(true));
    dispatch(showContentCreateTask());
  };

  return (
    <Header>
      <h1>Tasks</h1>
      <Button onClick={openModal}>
        <TasksPlus />
      </Button>
    </Header>
  );
};

export default TasksHeader;
