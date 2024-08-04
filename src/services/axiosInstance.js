// src/services/axiosInstance.js
import axios from "axios";
import { useAuthStore } from "../state/authStore";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api", // Update with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken, tokenType } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `${tokenType} ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
