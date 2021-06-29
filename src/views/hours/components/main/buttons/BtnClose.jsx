import React from "react";
import styled from "styled-components";
import SvgClose from "../../svg/SvgClose";

const Button = styled.button`
  display: flex;
  border: none;
  outline: none;
  background-color: transparent;
  margin: 0 auto;

  & svg {
    width: 2rem;
    height: 2rem;
    color: #ee4586;
    opacity: 1;
    transition: opacity 0.5s;
  }

  &:hover svg {
    opacity: 0.6;
  }
`;

const BtnClose = ({ remove, index }) => {
  const removeRow = () => {
    remove(index);
  };

  return (
    <Button onClick={removeRow} type="button">
      <SvgClose />
    </Button>
  );
};

export default BtnClose;
