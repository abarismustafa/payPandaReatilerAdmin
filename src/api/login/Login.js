import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";

export const userType = (data) => {
  return axiosInstance.get(`${baseUrl}usertype`);
};

export const isMobileExits = (value) => {
  return axiosInstance.get(`${baseUrl}auth/isMobileNoExist/${value}`);
};

export const mobileGenerateOtp = (value) => {
  return axiosInstance.post(`${baseUrl}auth/mb/verifyMobileNo`, value);
};

export const isVerifiedMobileOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNoOtp`, value);
};

export const panNumberVarify = (value) => {
  return axios.post(`${baseUrl}verification/pan/verifypanOtp`, value);
};

export const adharGenerateOtp = (value) => {
  return axios.post(`${baseUrl}verification/adhaar/otp`, value);
};

export const subOtp = (value) => {
  return axios.post(`${baseUrl}/verification/adhaar/verify`, value);
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

