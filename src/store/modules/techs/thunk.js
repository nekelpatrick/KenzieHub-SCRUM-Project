import axios from "axios";

import { postTechs } from "./actions";

export const postTechsThunk = (authToken) => (dispatch, getState) => {
    const base_url = "https://kenziehub.me";
    const toPost = {
        "title": "Banana",
        "status": "Iniciante"
    }

  axios
    .post(base_url ,{
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
    .then((res) => {
      dispatch(postTechs(toPost));
    });
};
