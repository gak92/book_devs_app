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
      "http://localhost:3000/api/v1/developers",
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

const addDeveloper = (FormData) => async (dispatch, getState) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3000/api/v1/developers",
      data: FormData,
    });
    dispatch({
      type: types.ADD_DEVELOPER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export { getDevelopers, addDeveloper };
