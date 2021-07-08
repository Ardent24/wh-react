import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  counterAmount,
  stateRows,
  stateTotalAmount,
} from "../../../../store/reducers/hourReducer";

const Text = styled.p`
  margin-top: 2rem;
`;

const HoursFooter = () => {
  const rows = useSelector(stateRows);
  const totalAMount = useSelector(stateTotalAmount);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(counterAmount());
  }, [dispatch, rows]);

  return (
    <Text>
      Total hours: <strong>{totalAMount}</strong>
    </Text>
  );
};

export default HoursFooter;
