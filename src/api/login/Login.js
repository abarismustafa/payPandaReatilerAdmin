import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";

const token = window.localStorage.getItem("userIdToken")

export const userType = (data) => {
  return axiosInstance.get(`${baseUrl}usertype/public/list`);
};

export const isMobileExits = (value) => {
  return axiosInstance.get(`${baseUrl}auth/isMobileNoExist/${value}`);
};

export const mobileGenerateOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNo`, value);
};

export const isVerifiedMobileOtp = (value) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNoOtp`, value);
};
export const registerUser = (value) => {
  return axiosInstance.post(`${baseUrl}auth/mb/register`, value);
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
export const personalDetails = (value) => {
  return axios.post(`${baseUrl}/verification/personalDetails`, value);
};
export const GstBusiness = (value) => {
  return axios.post(`${baseUrl}/verification/gstno`, value);
};

export const userLogin = (value) => {
  return axiosInstance.post(`${baseUrl}auth/mb/login`, value);
};

export const bankAccount = (value) => {
  return axios.post(`${baseUrl}verification/bankAccount`, value);
};
export const videoKycUpload = (value) => {
  return axios.post(`${baseUrl}verification/kycUpload`, value);
};

export const userValidate = (value) => {
  return axiosInstance.get(`${baseUrl}auth/userValidate`);
};

export const cloudImage = (value) => {
  return axios.post(`${baseUrl}cloudinary/addImage`, value);
};
export const uploadDocument = (value) => {
  return axios.post(`${baseUrl}userdocument/add_doc`, value);
};
export const CountryList = (value) => {
  return axiosInstance.get(`${baseUrl}country/mb/public`);
};

export const getCountry = (value) => {
  return axios.get(`${baseUrl}country/mb/public`);
};

export const getState = (value) => {
  return axios.get(`${baseUrl}state/mb/public`);
};

export const declarationSub = (value) => {
  return axios.post(`${baseUrl}verification/docSave`, value);
};
export const sendShipping = (value) => {
  return axios.post(`${baseUrl}user/register/billAddress`, value);
};
// profileUpdate

export const updateProfilee = (value) => {
  return axios.put(`${baseUrl}auth/mb/update/profile`, value);
};

export const countryGet = (value) => {
  return axios.get(`${baseUrl}country/mb/public`);
};
export const languageGet = () => {
  return axios.get(`${baseUrl}language/lang/list`);
};
export const Getprofile = () => {
  return axios.get(`${baseUrl}auth/mb/get/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// profileUpdate



// export const currencyAdd = (data) => {
//   return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
// };
// export const currencyList = (data) => {
//   return axiosInstance.get(`${baseUrl}currency`);
// };
// export const currencyDelete = (id) => {
//   return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
// };

