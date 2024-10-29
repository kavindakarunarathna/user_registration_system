// auth reducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
