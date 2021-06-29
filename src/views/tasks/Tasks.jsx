import React from "react";
import styled from "styled-components";
import TasksHeader from "./components/header/TasksHeader";
import TasksMain from "./components/main/TasksMain";
import TasksPagination from "./components/pagination/TasksPagination";
import { responseTasks } from "../../store/reducers/tasksReducer";
import { useDispatch } from "react-redux";

const Wrapper = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Tasks = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(responseTasks(0));
  }, []);

  return (
    <Wrapper>
      <TasksHeader />
      <TasksMain />
      <TasksPagination />
    </Wrapper>
  );
};

export default Tasks;
