import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  getDataUser,
  isHandleShow,
} from "../../../../store/reducers/modalReducer";
import { WH_URL } from "../../../../api/API";

const ContactsItem = ({ data }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, team, location, photo } = data;
  const titleUser = `${lastName} ${firstName}`;

  const showModal = () => {
    dispatch(isHandleShow(true));
    dispatch(getDataUser(data));
  };

  return (
    <div className="contacts-main__item" onClick={showModal}>
      <img
        className="contacts-main__pic"
        src={`${WH_URL}/images/contacts/${photo}`}
        alt="avatar"
      />
      <div className="contacts-main__data">
        <h3>
          <p>{titleUser}</p>
        </h3>
        <p>Team: {team.name}</p>
        <p>Location: {location.name}</p>
      </div>
    </div>
  );
};

ContactsItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactsItem;
