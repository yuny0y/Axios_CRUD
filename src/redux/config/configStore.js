import { configureStore } from "@reduxjs/toolkit";
import todo from "../modules/todo";

const store =configureStore({
    reducer : {
        todo,
    }
})

export default store;