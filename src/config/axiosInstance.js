import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const authData = JSON.parse(localStorage.getItem("auth-storage"));

  const tokenType = authData?.state?.tokenType;
  const accessToken = authData?.state?.accessToken;

  if (tokenType && accessToken) {
    config.headers.Authorization = `${tokenType} ${accessToken}`;
  }

  return config;
});

export default axiosInstance;
