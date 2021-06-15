import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { getLocationApi, getTeamApi, getUsersApi } from "../../api/API";
import { filteredBySelect, filteredByValue } from "../../modules/filtres";

export const responseUsers = createAsyncThunk("users", async () => {
  return getUsersApi().then((res) => res.data.data.items);
});
export const responseTeam = createAsyncThunk("team", async () => {
  return getTeamApi().then((res) => res.data.data.items);
});
export const responseLocation = createAsyncThunk("location", async () => {
  return getLocationApi().then((res) => res.data.data.items);
});

const contactsReducer = createSlice({
  name: "contactsReducer",
  initialState: {
    users: [],
    team: [],
    location: [],
    selectListTeam: [],
    selectListLocation: [],
    findValue: [],
  },
  reducers: {
    setInputHeader: (state, action) => {
      state.findValue = action.payload;
    },
    resetFiters: (state) => {
      state.filterUsers = state.users;
      state.selectListTeam = [];
      state.selectListLocation = [];
    },
    isSelectedList: (state, action) => {
      const { selectedList, title } = action.payload;
      state[`selectList${title}`] = [...selectedList];
    },
  },
  extraReducers: {
    [responseUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [responseTeam.fulfilled]: (state, action) => {
      state.team = action.payload;
    },
    [responseLocation.fulfilled]: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const {
  setInputHeader,
  resetFiters,
  isSelectedList,
} = contactsReducer.actions;

export default contactsReducer.reducer;

export const usersState = (state) => state.contacts.users;
export const stateLocation = (state) => state.contacts.location;
export const stateTeam = (state) => state.contacts.team;
export const statefindValue = (state) => state.contacts.findValue;
export const stateSelectListLocation = (state) =>
  state.contacts.selectListLocation;
export const stateSelectListTeam = (state) => state.contacts.selectListTeam;

export const filteredСontacts = createSelector(
  [usersState, statefindValue, stateSelectListLocation, stateSelectListTeam],
  (users, findValue, selectListLocation, selectListTeam) => {
    const filteredLocation = !selectListLocation.length
      ? users
      : filteredBySelect(users, selectListLocation, "location");

    const filteredTeam = !selectListTeam.length
      ? filteredLocation
      : filteredBySelect(filteredLocation, selectListTeam, "team");

    const filteredValue = filteredByValue(filteredTeam, findValue);

    return filteredValue;
  }
);
