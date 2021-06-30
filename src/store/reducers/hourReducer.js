import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHoursApi, getPhaseFilteredTasksApi } from "../../api/API";

export const responseHours = createAsyncThunk("response hours", async () => {
  return getHoursApi().then((res) => res.data.data.items);
});
export const responseFilteredTasks = createAsyncThunk(
  "response tasks",
  async ({ index, id }) => {
    const tasks = await getPhaseFilteredTasksApi(id).then(
      (res) => res.data.data.items
    );
    return { tasks, index };
  }
);

const hourReducer = createSlice({
  name: "hourReducer",
  initialState: {
    tasksList: [],
    hours: [],
  },
  reducers: {
    setHours: (state, action) => {
      state.hours = action.payload;
    },
  },
  extraReducers: {
    [responseHours.fulfilled]: (state, action) => {
      state.hours = action.payload;
    },
    [responseFilteredTasks.fulfilled]: (state, action) => {
      const { tasks, index } = action.payload;

      state.tasksList[index] = tasks;
    },
  },
});

export const { setHours } = hourReducer.actions;

export default hourReducer.reducer;

export const stateHours = (state) => state.hour.hours;
export const stateTasks = (state) => state.hour.tasksList;
