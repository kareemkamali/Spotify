import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";

const store=configureStore({
    reducer:{
        isValid:userSlice,
        token:tokenSlice
    }
})

export default store