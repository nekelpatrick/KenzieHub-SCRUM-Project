const { getUserList } = require("../users-list/actions");

export const getUser = (user) => ({
  type: "@user/GET_USER",
  user,
});

export const deleteUser = (user) => ({
  type: "@user/DELETE_USER",
  user,
});

export const updateUser = (user) => ({
  type: "@user/UPDATE_USER",
  user,
});
