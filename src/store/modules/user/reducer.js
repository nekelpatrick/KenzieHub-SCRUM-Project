const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "@user/GET_USER":
      const { user } = action;
      return (state = user);
    case "@user/UPDATE_USER":
      return action.user;
    case "@user/DELETE_USER":
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
