import React from "react";
import { useSelector } from "react-redux";
import { stateFilterUsers } from "../../store/reducers/contactsReducer";

export const ContactsContext = React.createContext();

export const ContactsProvider = ({ children }) => {
  const users = useSelector(stateFilterUsers);
  const [stateResetFilters, setStateResetFilters] = React.useState(false);

  return (
    <ContactsContext.Provider
      value={{
        users,
        stateResetFilters,
        setStateResetFilters,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
