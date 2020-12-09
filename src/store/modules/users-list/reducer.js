const usersListReducer = (state = [], action) => {
  switch (action.type) {
    case "@users_list/GETUSERS":
      return action.list;
    default:
      return state;
  }
};

export default usersListReducer;
