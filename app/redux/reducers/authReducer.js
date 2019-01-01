// authReducer.js

import {
  IS_LOADING,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_CLEAN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_CLEAN,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_CLEAN
} from "../actions/types";

const initialState = {
  userRegister: {},
  userForgetPassword: {},
  user: {},
  isLoading: false
};

const authReducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userRegister: action.payload
      };
    case USER_REGISTER_CLEAN:
      return {
        ...state,
        userRegister: {}
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOGIN_CLEAN:
      return {
        ...state,
        user: {}
      };
    case USER_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        userForgetPassword: action.payload
      };
    case USER_FORGET_PASSWORD_CLEAN:
      return {
        ...state,
        userForgetPassword: {}
      };
    // case USER_REGISTER:
    //   return {
    //     ...state,
    //     userRegister: state.auths.concat({
    //       key: Math.random(),
    //       value: action.payload
    //     })
    //   };
    default:
      return state;
  }
};

export default authReducer;
