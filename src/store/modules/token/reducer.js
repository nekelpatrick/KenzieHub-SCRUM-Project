const userToken = (state = "", action) => {
  switch (action.type) {
    case "@token/SET_TOKEN":
      const { token } = action;
      return (state = token);

    case "@token/GET_TOKEN":
      return state;
    default:
      return state;
  }
};

export default userToken;
