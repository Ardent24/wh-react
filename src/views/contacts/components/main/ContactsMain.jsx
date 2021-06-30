import React from "react";
import { ContactsContext } from "../../ContactsContext";
import ContactsItem from "./ContactsItem";

const ContactsMain = () => {
  const users = React.useContext(ContactsContext).users;

  return (
    <main className="contacts-main">
      <div className="contacts-main__wrapper">
        {users.map((user) => (
          <ContactsItem data={user} key={user.id} />
        ))}
      </div>
    </main>
  );
};

export default ContactsMain;
