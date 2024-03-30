import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../login/loginSlice.js"
import { combineReducers } from "redux"; 

const rootReducer = combineReducers({
    login : loginReducer
})

export const store = configureStore({
    reducer : rootReducer
})