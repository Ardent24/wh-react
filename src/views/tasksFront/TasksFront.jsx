import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import TasksFrontHeader from "./components/header/TasksFrontHeader";
import TasksFrontMain from "./components/main/TasksFrontMain";
import TasksFrontPagination from "./components/pagination/TasksFrontPagination";
import { responseAllTasks } from "../../store/reducers/tasksReducer";

const Wrapper = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const TasksFront = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(responseAllTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <TasksFrontHeader />
      <TasksFrontMain />
      <TasksFrontPagination />
    </Wrapper>
  );
};

export default TasksFront;
