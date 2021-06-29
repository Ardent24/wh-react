import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModal,
  resetContentModal,
  stateContentContacts,
  stateContentCreateTask,
  stateIsOpen,
} from "../../store/reducers/modalReducer";
import ContentContacts from "./contacts/ContentContacts";
import ContentCreateTask from "./createTask/ContentCreateTask";

const Modals = () => {
  const dispatch = useDispatch();
  const stateOpen = useSelector(stateIsOpen);
  const showContentContacts = useSelector(stateContentContacts);
  const showContentCreateTask = useSelector(stateContentCreateTask);

  const handleClose = () => {
    dispatch(handleModal(false));
    dispatch(resetContentModal());
  };

  return (
    <Modal show={stateOpen} onHide={handleClose} animation={false} centered>
      {showContentContacts && <ContentContacts />}
      {showContentCreateTask && <ContentCreateTask />}
    </Modal>
  );
};

export default Modals;
