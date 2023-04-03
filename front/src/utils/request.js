import axios from "axios";

export const request = axios.create({
  baseURL: "https://localhost:3005/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const requestMulter = axios.create({
  baseURL: "https://localhost:3005/",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
