import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { statePhases } from "../../../../store/reducers/tasksReducer";

const Footer = styled.footer`
  margin-top: 4rem;
  display: flex;
  max-width: 200px;
  width: 100%;
  justify-content: space-between;
`;

const HoursFooter = ({ append }) => {
  const task = { name: "tasks" };
  const phase = useSelector(statePhases)[0];
  const date = new Date().toISOString();
  const comment = null;
  const idUser = useSelector((state) => state.auth.dataUser.id);

  const handlerRow = () => {
    append({ phase, task, date, comment, id: idUser });
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
