import React from "react";
import PropTypes from "prop-types";

const ContactsItem = ({ data }) => {
  const { firstName, lastName, team, location, photo } = data;
  const titleUser = `${lastName} ${firstName}`;

  return (
    <div className="contacts-main__item">
      <img
        className="contacts-main__pic"
        src={`http://development.wh2.dev7.sibers.com/images/contacts/${photo}`}
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
