// User Service
import axiosInstance from "../config/axiosInstance";

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post("/login", userData);
  console.log(response.data);
  return response.data;
};
