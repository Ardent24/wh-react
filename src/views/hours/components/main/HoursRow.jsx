import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BtnPlus from "./buttons/BtnPlus";
import BtnClose from "./buttons/BtnClose";
import HoursRowStatus from "./status/HoursRowStatus";
import HoursRowDescription from "./description/HoursRowDescription";
import HoursRowHours from "./hours/HoursRowHours";
import HoursRowTasks from "./tasks/HoursRowTasks";
import HoursRowPhases from "./phases/HoursRowPhases";
import { useSelector } from "react-redux";
import { stateListRow } from "../../../../store/reducers/hourReducer";
import { findIndex } from "../../../../modules/filtres";

const Tr = styled.tr`
  & td {
    vertical-align: middle;
  }
`;
const PaddingZero = styled.td`
  padding: 0 !important;
`;

const HoursRow = ({
  id,
  register,
  errors,
  remove,
  index,
  amount,
  status,
  phase,
  project,
}) => {
  // const listRow = useSelector(stateListRow);
  // const indexRow = findIndex(listRow, id);

  return (
    <Tr>
      <td>
        {/*<HoursRowPhases regiser={register} errors={errors} />*/}
      </td>
      <td>
        <BtnPlus />
      </td>
      <td>
        {/*<HoursRowTasks*/}
        {/*  register={register}*/}
        {/*  listRow={listRow}*/}
        {/*  indexRow={indexRow}*/}
        {/*/>*/}
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
        {/*<HoursRowStatus*/}
        {/*  register={register}*/}
        {/*  listRow={listRow}*/}
        {/*  indexRow={indexRow}*/}
        {/*/>*/}
      </td>
      <td>
        {/*<HoursRowDescription*/}
        {/*  register={register}*/}
        {/*  listRow={listRow}*/}
        {/*  indexRow={indexRow}*/}
        {/*/>*/}
      </td>
      <PaddingZero>
        <BtnClose remove={remove} index={index} />
      </PaddingZero>
    </Tr>
  );
};

HoursRow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HoursRow;
