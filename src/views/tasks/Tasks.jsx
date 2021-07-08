import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { responseTasks } from "../../store/reducers/tasksReducer";
import TasksHeader from "./components/header/TasksHeader";
import TasksMain from "./components/main/TasksMain";
import TasksPagination from "./components/pagination/TasksPagination";

const Wrapper = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Tasks = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(responseTasks(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
