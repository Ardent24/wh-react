import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {
  filteredUsersByValue,
  resetFiters,
  stateFilterUsers,
} from "../../../../store/reducers/contactsReducer";
import ContactsMultiselectsBox from "./ContactsMultiselectsBox";
import { ContactsContext } from "../../ContactsContext";

const ContactsHeader = () => {
  const [inp, setInp] = React.useState("");

  const users = useSelector(stateFilterUsers);
  const dispatch = useDispatch();
  const inputRef = React.useRef();
  const setReset = React.useContext(ContactsContext).setStateResetFilters;

  const isFilterUsers = (ev) => {
    const value = ev.target.value.toLowerCase();
    setInp(value);
  };

  React.useEffect(() => {
    const array = users.filter((i) => i.firstName.toLowerCase().includes(inp));
    console.log(array, inp);
    dispatch(filteredUsersByValue(inp));
  }, [inp]);

  const isResetFilters = () => {
    inputRef.current.value = "";
    dispatch(resetFiters());
    setReset(true);
  };

  return (
    <header className="contacts-header">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          aria-label="Recipient's username"
          onChange={isFilterUsers}
          ref={inputRef}
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
