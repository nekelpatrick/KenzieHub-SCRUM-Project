import { setToken } from "./actions";

export const setTokenThunk = (token) => (dispatch, getState) => {
  dispatch(setToken(token));
};
