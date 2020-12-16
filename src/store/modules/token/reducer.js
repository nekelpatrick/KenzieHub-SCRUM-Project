const userToken = (state = "", action) => {
  switch (action.type) {
    case "@token/SET_TOKEN":
      const { token } = action;
      return (state = token);
    default:
      return state;
  }
};

export default userToken;
