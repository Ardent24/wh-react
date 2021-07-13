import React from "react";
import { useSelector } from "react-redux";
import TasksFrontItem from "./TasksFrontItem";
import {
  isFilteredTasks,
  stateLastPag,
  statePrevPag,
} from "../../../../store/reducers/tasksReducer";

const TasksFrontBody = () => {
  const prevPag = useSelector(statePrevPag);
  const lastPag = useSelector(stateLastPag);
  const stateTasks = useSelector(isFilteredTasks);

  const tasks = stateTasks.filter((_, i) => i > prevPag && i <= lastPag);

  return (
    <>
      {tasks.map((item) => (
        <TasksFrontItem data={item} key={item.id} />
      ))}
    </>
  );
};

export default TasksFrontBody;
