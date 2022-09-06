import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redux-fake-server.glitch.me",
});

export default axiosInstance;
