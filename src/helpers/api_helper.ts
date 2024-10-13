import axios from "axios";
import accessToken from "./token_helper";

const API_URL = "https://api.synthesise.me";

const axiosApi = axios.create({
  baseURL: API_URL,
});

function setToken() {
  const token = accessToken();
  axiosApi.defaults.headers.common["Authorization"] = "Bearer " + token;
}

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url: string, config = {}) {
  setToken();
  const response = await axiosApi.get(url, { ...config });
  return response.data;
}

export async function post(url: string, data: any, config = {}) {
  setToken();
  const response = await axiosApi.post(url, { ...data }, { ...config });
  return response.data;
}

export async function put(url: string, data: any, config = {}) {
  setToken();
  const response = await axiosApi.put(url, { ...data }, { ...config });
  return response.data;
}

export async function del(url: string, config = {}) {
  setToken();
  const response = await axiosApi.delete(url, { ...config });
  return response.data;
}

export async function patch(url: string, data: any, config = {}) {
  setToken();
  const response = await axiosApi.patch(url, { ...data }, { ...config });
  return response.data;
}
