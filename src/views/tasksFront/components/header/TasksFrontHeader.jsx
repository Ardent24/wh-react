import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  handleModal,
  showContentCreateTask,
} from "../../../../store/reducers/modalReducer";
import TasksPlus from "../../../tasks/components/svg/TasksPlus";
import { Col, FormGroup, InputGroup, Row } from "react-bootstrap";
import SearchFilter from "./search/SearchFilter";
import ResetFilters from "./reset/ResetFilters";
import DateFilters from "./date/DateFilter";
import SelectFilter from "./select/SelectFilter";
import { responseAllTasks } from "../../../../store/reducers/tasksReducer";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;
const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

const TasksFrontHeader = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(handleModal(true));
    dispatch(showContentCreateTask());
  };

  return (
    <Header>
      <HeaderWrap>
        <h1>Tasks</h1>
        <Button onClick={openModal}>
          <TasksPlus />
        </Button>
      </HeaderWrap>
      <InputGroup className="mt-3">
        <SearchFilter />
        <ResetFilters />
      </InputGroup>
      <div className="mt-3">
        <Row>
          <FormGroup as={Col}>
            <SelectFilter />
          </FormGroup>
          <DateFilters />
        </Row>
      </div>
    </Header>
  );
};

export default TasksFrontHeader;
