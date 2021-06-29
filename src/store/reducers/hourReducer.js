import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHoursApi, getPhaseFilteredTasksApi } from "../../api/API";
import uuid from "react-uuid";

export const responseHours = createAsyncThunk("response hours", async () => {
  return getHoursApi().then((res) => res.data.data.items);
});
export const responsePhaseFilteredTasks = createAsyncThunk(
  "response tasks",
  async ({ val, id }) => {
    const tasks = await getPhaseFilteredTasksApi(val).then(
      (res) => res.data.data.items
    );
    return { tasks, id };
  }
);

const emptyObj = {
  id: uuid(),
  hours: 0,
  tasks: [],
  currentTask: "tasks",
  status: "IN_PROGRESS",
  comment: "",
  phase: {},
};

const hourReducer = createSlice({
  name: "hourReducer",
  initialState: {
    listRow: [{...emptyObj}],
    hours: [],
  },
  reducers: {
    editRowCurrentTask: (state, action) => {
      const { value, indexRow } = action.payload;

      state.listRow[indexRow].currentTask = value
    },
    editRowHours: (state, action) => {
      const { value, indexRow } = action.payload;

      state.listRow[indexRow].hours = value;
    },
    addRow: (state) => {
      state.listRow.push({ ...emptyObj, id: uuid() });
    },
    deleteRow: (state, action) => {
      state.listRow = state.listRow.filter(
        (elem) => elem.id !== action.payload
      );
    },
  },
  extraReducers: {
    [responseHours.fulfilled]: (state, action) => {
      state.hours = action.payload;
    },
    [responsePhaseFilteredTasks.fulfilled]: (state, action) => {
      const { tasks, id } = action.payload;
      const index = state.listRow.findIndex((elem) => elem.id === id);

      state.listRow[index] = { ...state.listRow[index], tasks: tasks };
    },
  },
});

export const { addRow, deleteRow, editRowCurrentTask, editRowHours } = hourReducer.actions;

export default hourReducer.reducer;

export const stateListRow = (state) => state.hour.listRow;
export const stateHours = (state) => state.hour.hours;
