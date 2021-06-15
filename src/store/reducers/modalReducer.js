import { createSlice } from "@reduxjs/toolkit";

const modalReducer = createSlice({
  name: "modalReducer",
  initialState: {
    user:{},
    handleShow: false,
  },
  reducers: {
    isHandleShow: (state, action) => {
      state.handleShow = action.payload;
    },
    getDataUser: (state, action) =>{
      state.user = action.payload
    }
  },
});

export const { isHandleShow, getDataUser } = modalReducer.actions;

export default modalReducer.reducer;

export const userState = (state) => state.modal.user;
export const handleShowState = (state) => state.modal.handleShow;
