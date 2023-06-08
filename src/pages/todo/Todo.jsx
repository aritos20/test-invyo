import React from 'react';
import TodoList from '../../components/todo/TodoList';
import ModalTodo from '../../components/todo/ModalTodo';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { showCompleted } from '../../features/todoSlice';

const Todo = () => {
  const dispatch = useDispatch();

  const handleClick = (flag) => {
    dispatch(showCompleted(flag));
  }

  return (
    <>
      <Typography variant="h2" sx={{textAlign: 'center', mt: 4}}>My Tasks</Typography>
      <Button variant="contained" sx={{display: 'block', margin: '0 auto', mt: 4}} onClick={() => handleClick(0)} >Show Completed Tasks</Button>
      <Button variant="contained" sx={{display: 'block', margin: '0 auto', mt: 4}} onClick={() => handleClick(1)} >Hide Completed Tasks</Button>
      <TodoList />
      <ModalTodo action="Add Task" />
    </>
  )
}

export default Todo