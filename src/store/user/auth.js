import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const signupURL = 'http://127.0.0.1:3000/users';
const loginURL = 'http://localhost:3000/users/sign_in';
const logoutURL = 'http://localhost:3000/users/sign_out';

const initialState = {
  name: '',
  email: '',
  userId: '',
  error: '',
  loggedIn: false,
  signedUp: false,
};

// Action Types
const LOGIN = 'user/login';
const LOGOUT = 'user/logout';
const SIGNUP = 'user/signup';

// Action Creator (User Sign Up)
export const postSignupDetails = createAsyncThunk(
  SIGNUP,
  async (signupDetails) => {
    const {
      fullName, email, password, confirmPassword,
    } = signupDetails;
    const response = await axios.post(signupURL, {
      user: {
        name: fullName,
        email,
        password,
        password_confirmation: confirmPassword,
      },
    });

    const { data, headers } = response;
    const userData = data.status.data;
    const { authorization } = headers;

    const currentUser = {
      name: userData.name,
      email: userData.email,
      userId: userData.id,
      loggedIn: true,
      signedUp: true,
    };

    localStorage.setItem('userAuth', authorization);

    return currentUser;
  },
);

// Action Creator (User Log In)
export const postLoginDetails = createAsyncThunk(
  LOGIN,
  async (loginDetails) => {
    const { email, password } = loginDetails;
    const response = await axios.post(loginURL, {
      user: {
        email,
        password,
      },
    });
    const { data, headers } = response;
    const { status } = data;
    const userData = status.data;
    const { authorization } = headers;

    const currentUser = {
      name: userData.name,
      email: userData.email,
      userId: userData.id,
      loggedIn: true,
      signedUp: true,
      admin: userData.admin,
    };

    localStorage.setItem('userAuth', authorization);

    return currentUser;
  },
);

// Action Creator (User Log Out)
export const userLogout = createAsyncThunk(
  LOGOUT,
  async (userAuth) => {
    // const response =
    await axios.delete(logoutURL, {
      headers: {
        Authorization: userAuth,
      },
    });

    localStorage.removeItem('userAuth');
  },
);

// Reducers using Slice
export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [postLoginDetails.fulfilled]: (state, action) => ({
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      userId: action.payload.userId,
      loggedIn: action.payload.loggedIn,
      signedUp: action.payload.signedUp,
      admin: action.payload.admin,
    }),
    [postLoginDetails.rejected]: (state, action) => ({
      ...state,
      error: action.error,
    }),
    [postSignupDetails.fulfilled]: (state, action) => ({
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      userId: action.payload.userId,
      loggedIn: action.payload.loggedIn,
      signedUp: action.payload.signedUp,
      admin: action.payload.admin,
    }),
    [postSignupDetails.rejected]: (state, action) => ({
      ...state,
      error: action.error,
    }),
    [userLogout.fulfilled]: (state, action) => ({
      ...state,
      name: '',
      email: '',
      userId: '',
      loggedIn: false,
      signedUp: false,
      error: action.error,
      admin: false,
    }),
  },
});

export default authSlice.reducer;
