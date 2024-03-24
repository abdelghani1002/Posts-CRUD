
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer:{
        posts:postsSlice,
        user:userSlice
    }
})