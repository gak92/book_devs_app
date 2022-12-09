import * as types from './devTypes';

const getDevelopers = (developers) => ({
  type: types.GET_DEVELOPERS_SUCCESS,
  payload: developers,
});

const addDeveloper = (developer) => ({
  type: types.ADD_DEVELOPER,
  payload: developer,
});

export { getDevelopers, addDeveloper };
