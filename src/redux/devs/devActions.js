import axios from "axios";
import * as types from "./devTypes";

const getDevelopers = (developers) => {
  return {
    type: types.GET_DEVELOPERS_SUCCESS,
    payload: developers,
  };
};

const addDeveloper = (developer) => {
  return {
    type: types.ADD_DEVELOPER,
    payload: developer,
  };
};

export { getDevelopers, addDeveloper };
