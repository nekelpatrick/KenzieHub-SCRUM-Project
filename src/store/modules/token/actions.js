export const setToken = (token) => ({
  type: "@token/SET_TOKEN",
  token,
});

export const getToken = (token) => ({
  type: "@token/GET_TOKEN",
  token,
});
