import React from "react";
import HoursRow from "./HoursRow";
import { useSelector } from "react-redux";
import { stateListRow } from "../../../../store/reducers/hourReducer";

const HoursRowList = ({ register, errors, fields, remove }) => {
  //const listRow = useSelector(stateListRow);

  return (
    <>
      {/*{[...listRow].map((row) => (*/}
      {/*  <HoursRow*/}
      {/*    key={`id-${row.id}`}*/}
      {/*    id={row.id}*/}
      {/*    register={register}*/}
      {/*    errors={errors}*/}
      {/*  />*/}
      {fields.map(({ id, amount, status, project, phase, task }, index) => {
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
          />
        );
      })}
    </>
  );
};

export default HoursRowList;
