import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { stateDataNow } from "../../../../store/reducers/calendarReducer";
import SvgPlus from "../svg/SvgPlus";
import {
  handleModal,
  showContentCreateRow,
} from "../../../../store/reducers/modalReducer";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #084298;
  margin-bottom: 0;
`;

const Button = styled.button`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  transition: 0.5s opacity;
  opacity: 1;

  &:hover {
    opacity: 0.6;
  }

  & svg {
    color: #1797d2;
  }
`;

const HoursDayHeader = () => {
  const date = useSelector(stateDataNow).date;
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(handleModal(true));
    dispatch(showContentCreateRow());
  };

  return (
    <Wrapper>
      <Title>Save Hours For {date}</Title>
      <Button onClick={openModal}>
        <SvgPlus></SvgPlus>
      </Button>
    </Wrapper>
  );
};

export default HoursDayHeader;
