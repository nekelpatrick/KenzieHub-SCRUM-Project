const techsReducer = (state = {}, action) => {
    switch (action.type) {
      case "@techs/GET_POST":
        return action.user.techs;
      default:
        return state;
    }
  };