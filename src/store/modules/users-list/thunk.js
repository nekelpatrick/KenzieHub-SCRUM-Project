import axios from "axios";
import { getUserList } from "./actions";

export const getUsersThunk = (url, setError) => (dispatch, getState) => {
  axios
    .get(url)
    .then((res) => {
      dispatch(getUserList(res.data));
    })
    .catch((err) => {
      setError(true);
    });
};
