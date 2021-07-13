import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { loggerStore } from "./loggerStore";

const isDevelopment = process.env.REACT_APP_ENV === "development";

const devMiddleware = (middleware) => middleware().concat(loggerStore);
const prodMiddleware = (middleware) => middleware();

export const store = configureStore({
  middleware: isDevelopment ? prodMiddleware : devMiddleware,
  devTools: isDevelopment ? false : true,
  reducer: rootReducer,
});
