import React from 'react';
import TodoList from '../../components/TodoList';
import ModalTodo from '../../components/ModalTodo';

const Todo = () => {
  return (
    <>
      <TodoList />
      <ModalTodo action="Add Task" />
    </>
  )
}

export default Todo