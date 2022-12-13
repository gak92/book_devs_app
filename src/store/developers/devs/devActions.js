// import * as types from './devTypes';

// const getDevelopers = (developers) => ({
//   type: types.GET_DEVELOPERS_SUCCESS,
//   payload: developers,
// });

// const addDeveloper = (developer) => ({
//   type: types.ADD_DEVELOPER,
//   payload: developer,
// });

// export { getDevelopers, addDeveloper };

import axios from "axios";
import * as types from "./devTypes";

const getDevelopers = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DEVELOPERS_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    };
    const { data } = await axios.get(
      "http://127.0.0.1:3000/api/v1/developers",
      config
    );
    dispatch({
      type: types.GET_DEVELOPERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_DEVELOPERS_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.error,
    });
  }
};

const addDev = (FormData) => async (dispatch) => {
  console.log(FormData);
  try {
    const { data } = await axios({
      method: "post",
      url: "http://127.0.0.1:3000/api/v1/developers",
      data: FormData,
    });
    console.log(data);
    dispatch({
      type: types.ADD_DEVELOPER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getDevelopers, addDev };
