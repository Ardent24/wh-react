import axios from "axios";

const BASE_URL = "https://whapi.demo.sibers.com/";
const API_KEY = "1cb4b9323f375899910e226e5e985b3bf52901a4";

const API = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: API_KEY },
  withCredentials: true,
});

export const signInApi = (data) => API.post("/api/security/login", data);
export const logOutApi = () => API.post("/api/security/logout");
export const getUserApi = () => API.get("/api/v1/user/current");