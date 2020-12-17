import { setToken, getToken } from "./actions";

export const setTokenThunk = (token) => (dispatch, getState) => {
  dispatch(setToken(token));
};

export const getTokenThunk = () => (dispatch, getState) => {
  dispatch(getToken());
};
