import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getHoursApi,
  getPhaseFilteredTasksApi,
  getPhasesApi,
} from "../../api/API";

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
export const responseHoursTasks = createAsyncThunk(
  "response hours tasks",
  async (id) =>
    await getPhaseFilteredTasksApi(id).then((res) => res.data.data.items)
);

export const responseHoursInPhases = createAsyncThunk(
  "response hours phases",
  async () => {
    return getPhasesApi().then((res) => res.data.data.items);
  }
);

const hourReducer = createSlice({
  name: "hourReducer",
  initialState: {
    tasksList: [],
    hours: [],
    rows: [],
    rowId: 0,
    editRow: false,
    totalAmount: 0,
  },
  reducers: {
    setHours: (state, action) => {
      state.hours = action.payload;
    },
    getRowId: (state, action) => {
      state.rowId = action.payload;
    },
    onChangeEditRow: (state, action) => {
      state.editRow = action.payload;
    },
    editRowAmount: (state, action) => {
      state.rows[state.rowId].amount = action.payload;
    },
    editRowPhases: (state, action) => {
      state.rows[state.rowId].phase = action.payload;
    },
    editRowTasks: (state, action) => {
      state.rows[state.rowId].task = action.payload;
    },
    deleteRowByIndex: (state, action) => {
      state.rows.splice(action.payload, 1);
    },
    addRowItem: (state, action) => {
      state.rows.push(action.payload)
    },
    counterAmount: (state) => {
      let count = 0;

      state.rows.map((row) => count += row.amount);
      state.totalAmount = count;
    },
    updateDataRow: (state, action) => {
      state.rows[state.rowId] = action.payload;
    }
  },
  extraReducers: {
    [responseHours.fulfilled]: (state, action) => {
      state.rows = action.payload;
    },
    [responseFilteredTasks.fulfilled]: (state, action) => {
      const { tasks, index } = action.payload;

      state.tasksList[index] = tasks;
    },
    [responseHoursTasks.fulfilled]: (state, action) => {
      const tasks = action.payload;

      state.rows[state.rowId].tasks = tasks;
    },
    [responseHoursInPhases.fulfilled]: (state, action) => {
      const phases = action.payload;

      state.rows[state.rowId].phases = phases;
    },
  },
});

export const {
  setHours,
  getRowId,
  onChangeEditRow,
  editRowAmount,
  editRowPhases,
  editRowTasks,
  deleteRowByIndex,
  addRowItem,
  counterAmount,
  updateDataRow
} = hourReducer.actions;

export default hourReducer.reducer;

export const stateHours = (state) => state.hour.hours;
export const stateTasks = (state) => state.hour.tasksList;
export const stateRows = (state) => state.hour.rows;
export const stateEditRow = (state) => state.hour.editRow;
export const stateIdRow = (state) => state.hour.rowId;
export const stateTotalAmount = (state) => state.hour.totalAmount;
