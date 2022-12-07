import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://127.0.0.1:3000';
const loginURL = 'http://localhost:3000/users/sign_in';
const logoutURL = 'http://localhost:3000/users/sign_out';

const initialState = {
  name: '',
  email: '',
  userId: '',
  loggedIn: false
};

// Action Types
const LOGIN = 'user/login';
const LOGOUT = 'user/logout'

// Action Creator (User Log In)
export const postLoginDetails = createAsyncThunk(
  LOGIN,
  async (loginDetails) => {
    const { email, password } = loginDetails;
    const response = await axios.post(loginURL, { user: {
        email,
        password,
      }
    });
    // console.log("Response: ", response);
    const { data, headers } = response;
    // console.log("Data: ", data);

    const { status } = data;
    // console.log("Status: ", status);
    
    const userData = status.data;
    console.log("User Data: ", userData);

    const { authorization } = headers;
    console.log("Authorization: ", authorization);

    const currentUser = {
      name: userData.name,
      email: userData.email,
      userId: userData.id,
      loggedIn: true,
    };

    localStorage.setItem('userAuth', JSON.stringify(authorization));

    return currentUser;
  },
);

// Action Creator (User Log Out)
export const userLogout = createAsyncThunk(
  LOGOUT,
  async (userAuth) => {
    const response = await axios.delete(logoutURL, {
      headers: {
        Authorization: userAuth,
      },
    });

    console.log("Logout Response: ", response);
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
    }),
  },
});

export default authSlice.reducer;
