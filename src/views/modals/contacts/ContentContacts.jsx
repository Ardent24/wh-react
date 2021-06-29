import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userState } from "../../../store/reducers/modalReducer";

import styles from "./ContentContacts.module.scss";

const ContentContacts = () => {
  const user = useSelector(userState);

  const nick = `${user.firstName} ${user.lastName}`;
  const phone = user.cellPhone;
  const email = user.email;
  const skype = user.skype;
  const team = user.team?.name;
  const location = user.location?.name;

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{nick}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-wrapper">
          <p className={styles[`modal-wrapper__item`]}>
            <strong>Phone:</strong>
            <span>{phone}</span>
          </p>
          <p className={styles[`wrap-item`]}>
            <strong>Email:</strong>
            <span>{email}</span>
          </p>
          <p className={styles[`modal-wrapper__item`]}>
            <strong>Skype:</strong>
            <span>{skype}</span>
          </p>
          <p className={styles[`modal-wrapper__item`]}>
            <strong>Team:</strong>
            <span>{team}</span>
          </p>
          <p className={styles[`modal-wrapper__item`]}>
            <strong>Location:</strong>
            <span>{location}</span>
          </p>
        </div>
      </Modal.Body>
    </>
  );
};

export default ContentContacts;
