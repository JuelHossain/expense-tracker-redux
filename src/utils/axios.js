import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://redux-fake-server.herokuapp.com",
});

export default axiosInstance;
