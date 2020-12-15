const usersListReducer = (state = [], action) => {
  switch (action.type) {
    case "@users_list/GETUSERS":
      return action.list;
    case "@users_list/GETTOKEN":
      return action.token;
    default:
      return state;
  }
};

export default usersListReducer;
