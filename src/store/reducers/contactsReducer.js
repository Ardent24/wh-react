import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getLocationApi,
  getTeamApi,
  getUsersApi,
} from "../../api/authorizationAPI";

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
    filterUsers: [],
    selectListTeam: [],
    selectListLocation: [],
  },
  reducers: {
    filteredUsersByValue: (state, action) => {
      const array = state.filterUsers.filter((i) => i.firstName.toLowerCase().includes(action.payload))
      state.filterUsers = [...array]
      // state.value = action.payload
        //state.filterUsers = action.payload
    },
    filteredUsersBySelect: (state, action) => {
      state.filterUsers = state.filterUsers.filter((user) => {
        let flag = false;

        for (let i = 0; i < state.selectListLocation.length; i++) {
          if (
            state.selectListLocation[i].name.toLowerCase() ===
            user.location.name.toLowerCase()
          ) {
            flag = true;
            break;
          }
        }

        return flag;
      });
    },
    resetFiters: (state) => {
      state.filterUsers = state.users;
      state.selectList = [];
    },
    isSelectedList: (state, action) => {
      const { selectedList, title } = action.payload;
      state[`selectList${title}`] = [...selectedList];
    },
  },
  extraReducers: {
    [responseUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.filterUsers = action.payload;
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
  filteredUsersByValue,
  filteredUsersBySelect,
  resetFiters,
  isSelectedList,
} = contactsReducer.actions;

export default contactsReducer.reducer;

export const usersState = (state) => state.contacts.users;
export const stateTeam = (state) => state.contacts.team;
export const stateLocation = (state) => state.contacts.location;
export const stateFilterUsers = (state) => state.contacts.filterUsers;
