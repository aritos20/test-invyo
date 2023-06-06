import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todo')) || [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTask: (state, action) => {
            console.log('hola');
            state.todoList = [...state.todoList, action.payload];
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        }
    }
})

export default todoSlice.reducer;
export const { addTask } = todoSlice.actions;
