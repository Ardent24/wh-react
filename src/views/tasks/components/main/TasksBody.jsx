import React from "react";
import { useSelector } from "react-redux";
import { stateTasks } from "../../../../store/reducers/tasksReducer";
import TasksItem from "./TasksItem";

const TasksBody = () => {
  const tasks = useSelector(stateTasks);

  return (
    <>
      {tasks.map((item) => (
        <TasksItem data={item} key={item.id} />
      ))}
    </>
  );
};

export default TasksBody;
