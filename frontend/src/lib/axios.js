import axios from "axios";

//in production there is nothing called localhost so we have to make this dynamic
BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;