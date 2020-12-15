import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import usersListReducer from "./modules/users-list/reducer";
import userReducer from "./modules/user/reducer";
import techsReducer from './modules/techs/reducer'

const reducers = combineReducers({
  userList: usersListReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
