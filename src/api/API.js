import axios from "axios";

const BASE_URL = process.env.REACT_App_BASE_URL;
const API_KEY = process.env.REACT_App_API_KEY;
export const WH_URL = process.env.REACT_App_WH_URL;

// const isDevelopment = process.env.REACT_APP_ENV === "development";

// const BASE_URL = isDevelopment
//   ? "https://wh2api.sibers.com"
//   : "https://whapi.demo.sibers.com/";

// const API_KEY = isDevelopment
//   ? "557a3d87ba73b749835d5502cbba5c0f2b6acfae"
//   : "1cb4b9323f375899910e226e5e985b3bf52901a4";

// export const WH_URL = isDevelopment
//   ? "https://wh2.sibers.com"
//   : "http://development.wh2.dev7.sibers.com";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: API_KEY },
  withCredentials: true,
});

export const signInApi = (data) => API.post("/api/security/login", data);
export const getUserApi = () => API.get("/api/v1/user/current");
export const getCalendarApi = () => API.get("/api/v1/calendar");
export const getMonthApi = (year, month) =>
  API.get(`/api/v1/calendar/${year}/${month}`);
export const getDayApi = (year, month, day) =>
  API.get(`/api/v1/calendar/${year}/${month}/${day}`);
export const getUsersApi = () => API.get(`/api/v1/users?limit=0`);
export const getTeamApi = () => API.get(`/api/v1/teams?limit=0`);
export const getLocationApi = () => API.get(`/api/v1/locations`);
export const getAllTasksApi = () => API.get(`/api/v1/tasks?limit=0`);
export const getTasksApi = (i) => API.get(`/api/v1/tasks?page=${i}&limit=10`);
export const getPhaseFilteredTasksApi = (id) =>
  API.get(`/api/v1/phases/${id}/tasks?limit=0`);
export const postTasksApi = (data) => API.post("/api/v1/tasks", data);
export const getPhasesApi = () => API.get("/api/v1/phases?limit=0");
export const getHoursApi = () => API.get("/api/v1/hours");
export const postHoursApi = (data) => API.post("/api/v1/hours", data);
export const updateHoursApi = (id, data) =>
  API.put(`/api/v1/hours/${id}`, data);
export const deleteHoursApi = (id) => API.delete(`/api/v1/hours/${id}`);
export const addHoursApi = (data) => API.post("/api/v1/hours", data);
export const getNowTasksApi = (id, date) =>
  API.get(`/api/v1/phases/${id}/tasks?limit=0&date=${date}`);
