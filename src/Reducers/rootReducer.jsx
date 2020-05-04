import { combineReducers } from "redux";
import { TaskReducer } from "./TaskReducer.jsx";
import { TaskEditingReducer } from "./TaskEditingReducer.jsx";

export const rootReducer = combineReducers({
  TaskReducer,
  TaskEditingReducer,
});
