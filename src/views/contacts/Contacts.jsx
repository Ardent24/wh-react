import React from "react";

import { ContactsProvider } from "./ContactsContext";
import ContactsHeader from "./components/header/ContactsHeader";
import ContactsMain from "./components/main/ContactsMain";

import "./styles/Contacts.scss";

const Contacts = () => {
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
