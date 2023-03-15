import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
    {
        id : uuidv4(),
        title : "리액트",
        contents : "공부하기",
        isDone : false,
    },
    {
        id : uuidv4(),
        title : "리액트",
        contents : "공부하기",
        isDone : false,
    },
];

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            return [...state, action.payload];
        },
        removeTodo : (state, action) => {
            return state.filter((el) => el.id !== action.payload);
        },
        modifyTodo : (state, action) => {
            const { id, editContent } = action.payload;
            const index = state.findIndex((el) => el.id === id);
            if (index !== -1) {
                state[index].contents = editContent;
            }
        }
    }
});

export const {addTodo, removeTodo, modifyTodo} = todoSlice.actions;
export default todoSlice.reducer;