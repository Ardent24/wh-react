import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import calendarReducer from "./reducers/calendarReducer";
import contactsReducer from "./reducers/contactsReducer";
import modalReducer from "./reducers/modalReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  contacts: contactsReducer,
  modal: modalReducer,
});