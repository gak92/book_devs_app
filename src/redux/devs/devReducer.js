/* eslint-disable import/prefer-default-export */
import * as types from "./devTypes";

const initialState = {
  loading: false,
  developers: [],
};

const devReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEVELOPERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_DEVELOPERS_SUCCESS:
      return { ...state, loading: false, developers: action.payload };
    case types.GET_DEVELOPERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.ADD_DEVELOPER:
      return {
        ...state,
        developers: [...state.developers, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};

export default devReducer;
