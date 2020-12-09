import axios from "axios";
import { getUserList } from "./actions";

export const getUsersThunk = (pageNumber, setError) => (dispatch, getState) => {
  axios
    .get("https://kenziehub.me/users?perPage=15&page=" + pageNumber)
    .then((res) => {
      dispatch(getUserList(res.data));
    })
    .catch((err) => {
      setError(true);
    });
};
