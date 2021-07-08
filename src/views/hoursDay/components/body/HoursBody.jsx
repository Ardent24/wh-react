import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  responseHours,
  stateRows,
} from "../../../../store/reducers/hourReducer";
import HoursItem from "./HoursItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const HoursBody = () => {
  const dispatch = useDispatch();
  const rows = useSelector(stateRows);

  React.useEffect(() => {
    dispatch(responseHours());
  }, [dispatch]);

  return (
    <Wrapper>
      {rows.map((item, i) => (
        <HoursItem key={item.id} data={item} index={i} />
      ))}
    </Wrapper>
  );
};

export default HoursBody;
