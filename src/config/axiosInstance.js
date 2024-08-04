// Axios Instance
// import useZustand from "@/state/useZustand";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* axiosInstance.interceptors.request.use((config) => {
  const { user } = useZustand();
  if (user?.accessToken) {
    config.headers.Authorization = `${user.tokenType} ${user.accessToken}`;
  }
  return config;
}); */

export default axiosInstance;
