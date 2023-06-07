import React from 'react';
import TodoList from '../../components/todo/TodoList';
import ModalTodo from '../../components/todo/ModalTodo';
import { Typography } from '@mui/material';

const Todo = () => {
  return (
    <>
      <Typography variant="h2" sx={{textAlign: 'center', mt: 4}}>My Tasks</Typography>
      <TodoList />
      <ModalTodo action="Add Task" />
    </>
  )
}

export default Todo