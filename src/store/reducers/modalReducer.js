import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modalReducer",
  initialState: {
    user: {},
    openModal: false,
    contentContacts: false,
    contentCreateTask: false,
  },
  reducers: {
    handleModal: (state, action) => {
      state.openModal = action.payload;
    },
    resetContentModal: (state) => {
      state.contentContacts = state.contentCreateTask = false;
    },
    showContentContacts: (state) => {
      state.contentContacts = true;
    },
    showContentCreateTask: (state) => {
      state.contentCreateTask = true;
    },
    getDataUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  handleModal,
  showContentContacts,
  showContentCreateTask,
  getDataUser,
  resetContentModal,
} = modalReducer.actions;

export default modalReducer.reducer;

export const userState = (state) => state.modal.user;
export const stateIsOpen = (state) => state.modal.openModal;
export const stateContentContacts = (state) => state.modal.contentContacts;
export const stateContentCreateTask = (state) => state.modal.contentCreateTask;
