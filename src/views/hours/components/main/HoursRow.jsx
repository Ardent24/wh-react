import React from "react";
import styled from "styled-components";
import BtnPlus from "./buttons/BtnPlus";
import BtnClose from "./buttons/BtnClose";
import HoursRowStatus from "./status/HoursRowStatus";
import HoursRowDescription from "./description/HoursRowDescription";
import HoursRowHours from "./hours/HoursRowHours";
import HoursRowTasks from "./tasks/HoursRowTasks";
import HoursRowPhases from "./phases/HoursRowPhases";

const Tr = styled.tr`
  & td {
    vertical-align: middle;
  }
`;
const PaddingZero = styled.td`
  padding: 0 !important;
`;

const HoursRow = ({
  register,
  errors,
  remove,
  index,
  amount,
  status,
  phase,
  comment,
  task,
  control,
}) => {
  return (
    <Tr>
      <td>
        {
          <HoursRowPhases
            register={register}
            errors={errors}
            phase={phase}
            index={index}
            control={control}
          />
        }
      </td>
      <td>
        <BtnPlus />
      </td>
      <td>
        <HoursRowTasks
          register={register}
          errors={errors}
          task={task}
          index={index}
          control={control}
        />
      </td>
      <td>
        <HoursRowHours
          register={register}
          errors={errors}
          amount={amount}
          index={index}
        />
      </td>
      <td>
        <HoursRowStatus register={register} index={index} status={status} />
      </td>
      <td>
        <HoursRowDescription
          register={register}
          index={index}
          comment={comment}
        />
      </td>
      <PaddingZero>
        <BtnClose remove={remove} index={index} />
      </PaddingZero>
    </Tr>
  );
};

export default HoursRow;
