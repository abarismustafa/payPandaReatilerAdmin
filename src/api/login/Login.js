import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";

export const userType = (data) => {
  return axiosInstance.get(`${baseUrl}usertype`);
};

// export const LoginSubmit = (data) =>
//   axiosInstance.post(`${baseUrl}staff/login`, data);

// export const currencyAdd = (data) => {
//   return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
// };
// export const currencyList = (data) => {
//   return axiosInstance.get(`${baseUrl}currency`);
// };
// export const currencyDelete = (id) => {
//   return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
// };

