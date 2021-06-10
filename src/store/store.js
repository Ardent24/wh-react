import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import contactsReducer, {responseLocation, responseTeam, responseUsers} from "./reducers/contactsReducer";
import authReducer from "./reducers/authReducer";
import calendarReducer, {
  getNowDate,
  setRouterCalendar,
} from "./reducers/calendarReducer";

import { dateNow } from "../modules/date";

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => "#139BFE",
    prevState: () => "#1C5FAF",
    action: () => "#149945",
    nextState: () => "#A47104",
    error: () => "#ff0005",
  },
});

const rootReducer = combineReducers({
  auth: authReducer,
  calendar: calendarReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }).concat(logger),
  devTools: true,
  reducer: rootReducer,
});

const createStoreDateNow = () => {
  const date = dateNow();
  const dateRoute = `${date.year}/${date.month}`;

  store.dispatch(getNowDate(date));
  store.dispatch(setRouterCalendar(dateRoute));
};

createStoreDateNow();


const getUsers = store.dispatch(responseUsers());
const getTeam = store.dispatch(responseTeam());
const getLocation = store.dispatch(responseLocation());

