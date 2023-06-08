import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: JSON.parse(localStorage.getItem('todo')) || [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTask: (state, action) => {
            let currentDate = new Date();
            let inputDate = Date.parse(action.payload.date);

            if (inputDate > currentDate) {
                action.payload.status = 'In Progress';
                state.todoList = [...state.todoList, action.payload];
            } else {
                action.payload.status = 'Completed';
                action.payload.show = false;
                state.todoList = [...state.todoList, action.payload];
            }
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        },
        deleteTask: (state, action) => {
            state.todoList.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        },
        editTask: (state, action) => {
            let currentDate = new Date();
            let inputDate = Date.parse(action.payload.date);

            if (inputDate > currentDate) {
                action.payload.status = 'In Progress';
                state.todoList[action.payload.index] = {title: action.payload.title, description: action.payload.description, date: action.payload.date, status: action.payload.status, show: action.payload.show};
            } else {
                action.payload.status = 'Completed';
                action.payload.show = false;
                state.todoList[action.payload.index] = {title: action.payload.title, description: action.payload.description, date: action.payload.date, status: action.payload.status, show: action.payload.show};
            }
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        },
        showCompleted: (state, action) => {
            if (action.payload === 0) {
                state.todoList = state.todoList.map(todo => {
                return {...todo, show: true};
            })} else {
                state.todoList = state.todoList.map(todo => {
                    if (todo.status === 'Completed') {
                        return {...todo, show: false};
                    } else {
                        return {...todo};
                    }
                })
            }
            localStorage.setItem('todo', JSON.stringify(state.todoList));
        }
    }
})

export default todoSlice.reducer;
export const { addTask, deleteTask, editTask, showCompleted } = todoSlice.actions;
