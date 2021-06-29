import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addRow, stateListRow } from "../../../../store/reducers/hourReducer";

const Footer = styled.footer`
  margin-top: 4rem;
  display: flex;
  max-width: 200px;
  width: 100%;
  justify-content: space-between;
`;

const HoursFooter = ({append}) => {
  const dispatch = useDispatch();

  const handlerRow = () => {
    //dispatch(addRow());

    append({})
  };

  return (
    <Footer>
      <Button variant="primary" type="submit">
        SUBMIT
      </Button>
      <Button variant="secondary" onClick={handlerRow}>
        ADD ROW
      </Button>
    </Footer>
  );
};

export default HoursFooter;
