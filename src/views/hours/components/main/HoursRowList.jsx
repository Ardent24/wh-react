import React from "react";
import HoursRow from "./HoursRow";

const HoursRowList = ({ register, errors, fields, remove, control, price }) => {
  return (
    <>
      {fields.map(
        ({ id, amount, status, project, phase, task, comment }, index) => {
          return (
            <HoursRow
              key={id}
              remove={remove}
              register={register}
              index={index}
              errors={errors}
              amount={amount}
              status={status}
              project={project}
              phase={phase}
              task={task}
              comment={comment}
              control={control}
            />
          );
        }
      )}
    </>
  );
};

export default HoursRowList;
