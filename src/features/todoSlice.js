import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todo')) || [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTask: (state, action) => {
            state.todoList = [...state.todoList, action.payload];
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        },
        deleteTask: (state, action) => {
            console.log(action.payload);
            state.todoList.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        },
        editTask: (state, action) => {
            state.todoList[action.payload.index] = {title: action.payload.title, description: action.payload.description, date: action.payload.date};
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        }
    }
})

export default todoSlice.reducer;
export const { addTask, deleteTask, editTask } = todoSlice.actions;
