import { combineReducers } from "redux";
import todos from "../modules/todos";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer, enhancer);

export default store;
