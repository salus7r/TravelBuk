// auth.js

import {
  IS_LOADING,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_CLEAN,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_CLEAN,
  USER_FORGET_PASSWORD,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_CLEAN
} from "./types";

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

export const userRegister = () => {
  return {
    type: USER_REGISTER
  };
};

export const userRegisterSuccess = registerData => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: registerData
  };
};

export const userRegisterClean = () => {
  return {
    type: USER_REGISTER_CLEAN
  };
};

export const userLogin = () => {
  return {
    type: USER_LOGIN
  };
};

export const userLoginSuccess = loginData => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: loginData
  };
};

export const userLoginClean = () => {
  return {
    type: USER_LOGIN_CLEAN
  };
};

export const userForgetPassword = () => {
  return {
    type: USER_FORGET_PASSWORD
  };
};

export const userForgetPasswordSuccess = forgetPasswordData => {
  return {
    type: USER_FORGET_PASSWORD_SUCCESS,
    payload: forgetPasswordData
  };
};

export const userForgetPasswordClean = () => {
  return {
    type: USER_FORGET_PASSWORD_CLEAN
  };
};
