import React from "react";
import SvgPlus from "../../svg/SvgPlus";
import styled from "styled-components";
import {
  handleModal,
  showContentCreateTask,
} from "../../../../../store/reducers/modalReducer";
import { useDispatch } from "react-redux";

const Button = styled.button`
  display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 0 auto;

  & svg {
    width: 2rem;
    height: 2rem;
    color: #1797d2;
    opacity: 1;
    transition: opacity 0.5s;
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

const BtnPlus = () => {
  const dispatch = useDispatch();

  const createTask = () => {
    dispatch(handleModal(true));
    dispatch(showContentCreateTask());
  };

  return (
    <Button onClick={createTask}>
      <SvgPlus />
    </Button>
  );
};

export default BtnPlus;
