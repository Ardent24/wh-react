import React from "react";
import { useSelector } from "react-redux";
import TasksFrontItem from "./TasksFrontItem";
import { isFilteredTasks } from "../../../../store/reducers/tasksReducer";

const TasksFrontBody = () => {
  const tasks = useSelector(isFilteredTasks);

  return (
    <>
      {tasks.map((item) => (
        <TasksFrontItem data={item} key={item.id} />
      ))}
    </>
  );
};

export default TasksFrontBody;
