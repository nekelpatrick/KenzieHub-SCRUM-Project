import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersListReducer from "./modules/users-list/reducer";
import userToken from "./modules/token/reducer";

const reducers = combineReducers({
  userList: usersListReducer,
  userToken: userToken,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
