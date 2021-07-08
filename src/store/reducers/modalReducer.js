import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modalReducer",
  initialState: {
    user: {},
    openModal: false,
    contentContacts: false,
    contentCreateTask: false,
    contentRow: false,
    contentCreateRow: false,
  },
  reducers: {
    handleModal: (state, action) => {
      state.openModal = action.payload;
    },
    resetContentModal: (state) => {
      state.contentContacts = state.contentCreateTask = state.contentRow = state.contentCreateRow = false;
    },
    showContentContacts: (state) => {
      state.contentContacts = true;
    },
    showContentRow: (state) => {
      state.contentRow = true;
    },
    showContentCreateTask: (state) => {
      state.contentCreateTask = true;
    },
    showContentCreateRow: (state) => {
      state.contentCreateRow = true;
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
  showContentRow,
  showContentCreateRow,
} = modalReducer.actions;

export default modalReducer.reducer;

export const userState = (state) => state.modal.user;
export const stateIsOpen = (state) => state.modal.openModal;
export const stateContentContacts = (state) => state.modal.contentContacts;
export const stateContentCreateTask = (state) => state.modal.contentCreateTask;
export const stateContentRow = (state) => state.modal.contentRow;
export const stateContentCreateRow = (state) => state.modal.contentCreateRow;
