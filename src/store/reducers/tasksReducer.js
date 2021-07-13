import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getAllTasksApi, getPhasesApi, getTasksApi } from "../../api/API";
import { filteredByProject, filteredByValue } from "../../modules/filtres";

export const responseTasks = createAsyncThunk("tasks", async (data) => {
  return getTasksApi(data).then((res) => res.data.data);
});
export const responseAllTasks = createAsyncThunk("allTasks", async () => {
  return getAllTasksApi().then((res) => res.data.data);
});
export const responsePhases = createAsyncThunk("phases", async () => {
  return getPhasesApi().then((res) => res.data.data.items);
});

const LIST_PAGES = 10;

const emptyArrayIsPages = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const tasksReducer = createSlice({
  name: "tasksReducer",
  initialState: {
    items: [],
    allItems: [],
    phases: [],
    currentPage: 0,
    totalCount: 0,
    pages: emptyArrayIsPages,
    prevPag: 0,
    lastPag: 10,
    totalPages: 0,
    filterValue: "",
    filterSelect: "all",
    filterStartDate: "",
    filterEndDate: "",
    resetFilters: false,
  },
  reducers: {
    changeCurrentPage: (state, action) => {
      const maxPages = state.totalPages - 1;
      const id = (state.currentPage = +action.payload);

      if (id > maxPages - 5) {
        state.pages = state.pages.map((elem, i, arr) => {
          elem.id = id - arr.length + 1 + i;

          return elem;
        });
      }

      if (id < maxPages - 5) {
        state.pages = state.pages.map((elem, i) => {
          elem.id = id + i;

          return elem;
        });
      }
    },
    isSummPages: (state) => {
      if (state.currentPage === 0) {
        state.prevPag = 0;
        state.lastPag = LIST_PAGES;
      } else {
        state.prevPag = state.currentPage * LIST_PAGES;
        state.lastPag = state.prevPag + LIST_PAGES;
      }
    },
    isResetedFilters: (state) => {
      state.resetFilters = true;
      state.filterValue = "";
      state.filterSelect = "all";
      state.filterStartDate = "";
      state.filterEndDate = "";
    },
    changeFlagResetFilters: (state, action) => {
      state.resetFilters = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setFilterSelect: (state, action) => {
      state.filterSelect = action.payload;
    },
    setFilterStartDate: (state, action) => {
      state.filterStartDate = action.payload;
    },
    setFilterEndDate: (state, action) => {
      state.filterEndDate = action.payload;
    },
    addNewTask: (state, action) => {
      state.items.unshift(action.payload);
      state.allItems.unshift(action.payload);
    },
  },
  extraReducers: {
    [responseTasks.fulfilled]: (state, action) => {
      const { items, count } = action.payload;
      const lengthArray = Math.ceil(count / LIST_PAGES);

      state.totalPages = lengthArray;
      state.items = items;
    },
    [responseAllTasks.fulfilled]: (state, action) => {
      const { items, count } = action.payload;
      const lengthArray = Math.ceil(count / LIST_PAGES);

      state.totalPages = lengthArray;
      state.allItems = items;
      state.totalCount = count;
    },
    [responsePhases.fulfilled]: (state, action) => {
      state.phases = action.payload;
    },
  },
});

export const {
  changeCurrentPage,
  isResetedFilters,
  setFilterValue,
  setFilterSelect,
  setFilterStartDate,
  setFilterEndDate,
  changeFlagResetFilters,
  isSummPages,
  addNewTask,
} = tasksReducer.actions;

export default tasksReducer.reducer;

export const stateTasks = (state) => state.tasks.items;
export const statePhases = (state) => state.tasks.phases;
export const stateCurrentPage = (state) => state.tasks.currentPage;
export const statePages = (state) => state.tasks.pages;
export const stateAllTasks = (state) => state.tasks.allItems;
export const stateResetFilters = (state) => state.tasks.resetFilters;
export const stateFilterValue = (state) => state.tasks.filterValue;
export const stateFilterSelect = (state) => state.tasks.filterSelect;
export const stateFilterStartDate = (state) => state.tasks.filterStartDate;
export const stateFilterEndDate = (state) => state.tasks.filterEndDate;
export const statePrevPag = (state) => state.tasks.prevPag;
export const stateLastPag = (state) => state.tasks.lastPag;
export const stateTotalPages = (state) => state.tasks.totalPages;

export const isFilteredTasks = createSelector(
  [
    stateAllTasks,
    stateFilterValue,
    stateFilterSelect,
    stateFilterStartDate,
    stateFilterEndDate,
  ],
  (tasks, value, select, startDate, endDate) => {
    const filteredByInput = filteredByValue(tasks, value);

    const filteredBySelect =
      select === "all"
        ? filteredByInput
        : filteredByProject(filteredByInput, select);

    const filteredByStart = startDate
      ? filteredBySelect.filter((el) => el.startDate >= startDate)
      : filteredBySelect;

    const filteredByEnd = endDate
      ? filteredByStart.filter((el) => el.endDate <= endDate)
      : filteredByStart;

    return filteredByEnd;
  }
);
