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
    getCalendarDays(state, action) {
      state.dataCalendar = action.payload;
    },
    setCalendarPending(state, action) {
      state.isLoading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    getNowDate(state, action) {
      state.dateNow = action.payload;
    },
    setRouterCalendar(state, action) {
      state.routerCalendar = action.payload;
    },
  },
});

export default calendarReducer.reducer;

export const {
  getCalendarDays,
  setCalendarPending,
  setData,
  getNowDate,
  setRouterCalendar,
} = calendarReducer.actions;
