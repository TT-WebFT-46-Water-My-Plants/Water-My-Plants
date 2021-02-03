import axios from "axios";

const defaultConfig = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
  baseURL: "http://localhost:2019",
};

export const axiosWithAuth = (config = defaultConfig) => {
  return axios.create(config);
};

export default axiosWithAuth;
