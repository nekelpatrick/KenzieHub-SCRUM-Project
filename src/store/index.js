import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersListReducer from "./modules/users-list/reducer";

const reducers = combineReducers({
  userList: usersListReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
