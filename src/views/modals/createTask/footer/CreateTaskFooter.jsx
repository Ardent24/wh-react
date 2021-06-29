import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleModal } from "../../../../store/reducers/modalReducer";

const CreateTaskFooter = ({ disabled }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleModal(false));
  };

  return (
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button
        variant="primary"
        type="submit"
        disabled={disabled}
      >
        Save
      </Button>
    </Modal.Footer>
  );
};

export default CreateTaskFooter;
