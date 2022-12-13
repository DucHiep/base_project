import {combineReducers} from "@reduxjs/toolkit";
import appReducer from "./app/appReducer";

export default combineReducers({
    app: appReducer,
});