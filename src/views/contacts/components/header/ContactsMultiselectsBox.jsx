import React from "react";
import { useSelector } from "react-redux";
import ContactsMultiselect from "./ContactsMultiselect";
import {
  stateLocation,
  stateTeam,
} from "../../../../store/reducers/contactsReducer";

const ContactsMultiselectsBox = () => {
  const team = useSelector(stateTeam);
  const location = useSelector(stateLocation);

  return (
    <div className="contacts-header__multiselects">
      <ContactsMultiselect title="Team" data={team} />
      <ContactsMultiselect title="Location" data={location}  />
    </div>
  );
};

export default ContactsMultiselectsBox;
