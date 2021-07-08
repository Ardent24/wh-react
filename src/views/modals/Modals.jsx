import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  handleModal,
  resetContentModal,
  stateContentContacts,
  stateContentCreateRow,
  stateContentCreateTask,
  stateContentRow,
  stateIsOpen,
} from "../../store/reducers/modalReducer";
import ContentContacts from "./contacts/ContentContacts";
import ContentCreateTask from "./createTask/ContentCreateTask";
import ContentEditRow from "./editRow/ContentEditRow";
import ContentCreateRow from "./createRow/ContentCreateRow";

const Modals = () => {
  const dispatch = useDispatch();
  const stateOpen = useSelector(stateIsOpen);
  const showContentContacts = useSelector(stateContentContacts);
  const showContentCreateTask = useSelector(stateContentCreateTask);
  const showContentRow = useSelector(stateContentRow);
  const showContentCreateRow = useSelector(stateContentCreateRow);

  const handleClose = () => {
    dispatch(handleModal(false));
    dispatch(resetContentModal());
  };

  return (
    <Modal show={stateOpen} onHide={handleClose} animation={false} centered>
      {showContentContacts && <ContentContacts />}
      {showContentCreateTask && <ContentCreateTask />}
      {showContentRow && <ContentEditRow />}
      {showContentCreateRow && <ContentCreateRow />}
    </Modal>
  );
};

export default Modals;
