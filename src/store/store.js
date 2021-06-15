import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { loggerStore } from "./loggerStore";
import {
  responseLocation,
  responseTeam,
  responseUsers,
} from "./reducers/contactsReducer";
import { isAuthUser, setAuthUserPending } from "./reducers/authReducer";
import { setNowDate, setRouterCalendar } from "./reducers/calendarReducer";
import { dateNow } from "../modules/date";
import { getUserApi } from "../api/API";

const isDevelopment = process.env.REACT_APP_ENV === "development";

const devMiddleware = (middleware) => middleware().concat(loggerStore);
const prodMiddleware = (middleware) => middleware();

export const store = configureStore({
  middleware: isDevelopment ? prodMiddleware : devMiddleware,
  devTools: isDevelopment ? false : true,
  reducer: rootReducer,
});

const createStoreDateNow = () => {
  const date = dateNow();
  const dateRoute = `${date.year}/${date.month}`;

  store.dispatch(setNowDate(date));
  store.dispatch(setRouterCalendar(dateRoute));
};

createStoreDateNow();

const promiseUser = getUserApi();

promiseUser
  .then((res) => {
    const user = res.data.data;

    store.dispatch(isAuthUser([user, true]));
    store.dispatch(setAuthUserPending(false));
  })
  .catch(() => {
    store.dispatch(isAuthUser([{}, false]));
    store.dispatch(setAuthUserPending(false));
  });

store.dispatch(responseUsers());
store.dispatch(responseTeam());
store.dispatch(responseLocation());
