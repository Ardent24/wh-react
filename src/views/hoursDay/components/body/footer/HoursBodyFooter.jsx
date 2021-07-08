import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModal,
  showContentRow,
} from "../../../../../store/reducers/modalReducer";
import {
  deleteRowByIndex,
  getRowId,
  stateRows,
} from "../../../../../store/reducers/hourReducer";
import { deleteHoursApi } from "../../../../../api/API";

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const HoursBodyFooter = ({ index }) => {
  const dispatch = useDispatch();
  const rows = useSelector(stateRows);
  const idRow = rows[index].id;

  const editRow = () => {
    dispatch(handleModal(true));
    dispatch(showContentRow(true));
    dispatch(getRowId(index));
  };

  const deleteRow = () => {
    dispatch(deleteRowByIndex(index));
    deleteHoursApi(idRow);
  };

  return (
    <Footer>
      <Button variant="dark" onClick={editRow}>
        Edit
      </Button>
      <Button variant="danger" onClick={deleteRow}>
        Delete
      </Button>
    </Footer>
  );
};

export default HoursBodyFooter;
