import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {
  setInputHeader,
  resetFilters, statefindValue,
} from "../../../../store/reducers/contactsReducer";
import ContactsMultiselectsBox from "./ContactsMultiselectsBox";
import { ContactsContext } from "../../ContactsContext";

const ContactsHeader = () => {
  const val = useSelector(statefindValue);
  const dispatch = useDispatch();
  const setReset = React.useContext(ContactsContext).setStateResetFilters;

  const isFilterUsers = (ev) => {
    const value = ev.target.value.toLowerCase();

    dispatch(setInputHeader(value));
  };

  const isResetFilters = () => {
    dispatch(setInputHeader(''));
    dispatch(resetFilters());
    setReset(true);
  };

  return (
    <header className="contacts-header">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          aria-label="Recipient's username"
          onChange={isFilterUsers}
          value={val}
        />
        <Button
          variant="outline-secondary"
          className="btn-radius"
          onClick={isResetFilters}
        >
          Reset Filter
        </Button>
      </InputGroup>
      <ContactsMultiselectsBox />
    </header>
  );
};

export default ContactsHeader;
