import axios from "axios";

const api = axios.create({
  baseURL: "http://api.car-visit.test",
});

export default api;
