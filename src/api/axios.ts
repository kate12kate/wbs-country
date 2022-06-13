import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: `http://localhost:8080/`,
};

export const instance: AxiosInstance = axios.create(axiosConfig);
