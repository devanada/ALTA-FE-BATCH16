import axios from "axios";

let bearerToken = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  const token = localStorage.getItem("token");
  axiosConfig.headers.Authorization = `Bearer ${token}`;

  return axiosConfig;
});

export default axiosWithConfig;
