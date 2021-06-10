import axios from "axios";

const BASE_URL = "https://whapi.demo.sibers.com/";
const API_KEY = "1cb4b9323f375899910e226e5e985b3bf52901a4";

// const WH_URL = "https://wh2.sibers.com";
// const BASE_URL = "https://wh2api.sibers.com";
// const API_KEY = "557a3d87ba73b749835d5502cbba5c0f2b6acfae";

export const API = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: API_KEY },
  withCredentials: true,
});

export const signInApi = (data) => API.post("/api/security/login", data);
export const logOutApi = () => API.post("/api/security/logout");
export const getUserApi = () => API.get("/api/v1/user/current");
export const getCalendarApi = () => API.get("/api/v1/calendar");
export const getMothApi = (year, month) =>
  API.get(`/api/v1/calendar/${year}/${month}`);
export const getDayApi = (year, month, day) =>
  API.get(`/api/v1/calendar/${year}/${month}/${day}`);
export const getUsersApi = () => API.get(`/api/v1/users?limit=0`);
export const getTeamApi = () => API.get(`/api/v1/teams?limit=0`);
export const getLocationApi = () => API.get(`/api/v1/locations`);