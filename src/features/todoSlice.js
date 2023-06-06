import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todo')) || [],
}

export const todoSlice = createSlice({
    
})