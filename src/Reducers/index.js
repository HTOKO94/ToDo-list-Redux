import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import ideasReducer from "./ideasReducer";

export default combineReducers({
  tasksReducer,
  ideasReducer,
});
