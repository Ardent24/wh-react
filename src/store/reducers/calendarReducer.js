import { createSlice } from "@reduxjs/toolkit";

const calendarReducer = createSlice({
  name: "calendarReducer",
  initialState: {
    isLoading: true,
    dataCalendar: {},
    dateNow: "",
    routerCalendar: "",
  },
  reducers: {
    setCalendarPending(state, action) {
      state.isLoading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setNowDate(state, action) {
      state.dateNow = action.payload;
    },
    setRouterCalendar(state, action) {
      state.routerCalendar = action.payload;
    },
  },
});

export default calendarReducer.reducer;

export const {
  setCalendarPending,
  setData,
  setNowDate,
  setRouterCalendar,
} = calendarReducer.actions;

export const stateDataNow = (state) => state.calendar.dateNow;
