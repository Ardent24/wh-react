import React from "react";
import { Button, Modal } from "react-bootstrap";
import { handleModal } from "../../../../../store/reducers/modalReducer";
import { useDispatch } from "react-redux";

const CreateRowFooter = () => {
  const dispatch = useDispatch();
  const handleClose = () => dispatch(handleModal(false));

  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Modal.Footer>
  );
};

export default CreateRowFooter;
