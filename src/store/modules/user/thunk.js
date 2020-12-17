import axios from "axios";

import { getUser, deleteUser, updateUser } from "./actions";

export const getUserThunk = (authToken) => (dispatch, getState) => {
  axios
    .get("https://kenziehub.me/profile", {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
    .then((res) => {
      dispatch(getUser(res.data));
    });
};

export const deleteUserThunk = (authToken, id) => (dispatch, getState) => {
  axios
    .delete("https://kenziehub.me/users/" + id, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
    .then((res) => {
      dispatch(deleteUser({}));
    });
};

export const updateUserThunk = (
  userUpdateData,
  authToken,
  setUpdateMessage
) => (dispatch, getState) => {
  if (userUpdateData.image) {
    axios
      .patch("https://kenziehub.me/users/avatar", userUpdateData.image, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((res) => {
        dispatch(updateUser(res.data));
        setUpdateMessage("Dados atualizados!");
      })
      .catch((err) => setUpdateMessage("Imagem inválida."));
  }
  if (userUpdateData.old_password && userUpdateData.password) {
    axios
      .put(
        "https://kenziehub.me/profile",
        {
          name: userUpdateData.name,
          email: userUpdateData.email,
          course_module: userUpdateData.course_module,
          bio: userUpdateData.bio,
          contact: userUpdateData.contact,
          old_password: userUpdateData.old_password,
          password: userUpdateData.password,
        },
        {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        }
      )
      .then((res) => {
        dispatch(updateUser(res.data));
        setUpdateMessage("Dados atualizados!");
      })
      .catch((err) => setUpdateMessage("Senha antiga incorreta."));
  } else {
    axios
      .put(
        "https://kenziehub.me/profile",
        {
          name: userUpdateData.name,
          email: userUpdateData.email,
          course_module: userUpdateData.course_module,
          bio: userUpdateData.bio,
          contact: userUpdateData.contact,
        },
        {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        }
      )
      .then((res) => {
        setUpdateMessage("Dados atualizados!");
        dispatch(updateUser(res.data));
      })
      .catch((err) => console.log(err));
  }
};
