import React from "react";
import { ContactsProvider } from "./ContactsContext";
import ContactsHeader from "./components/header/ContactsHeader";
import ContactsMain from "./components/main/ContactsMain";

import "./styles/Contacts.scss";
import {
  responseLocation,
  responseTeam,
  responseUsers,
} from "../../store/reducers/contactsReducer";
import { store } from "../../store/store";

const Contacts = () => {
  React.useEffect(() => {
    store.dispatch(responseUsers());
    store.dispatch(responseTeam());
    store.dispatch(responseLocation());
  }, []);

  return (
    <ContactsProvider>
      <div className="contacts">
        <ContactsHeader />
        <ContactsMain />
      </div>
    </ContactsProvider>
  );
};

export default Contacts;
