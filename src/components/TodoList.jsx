import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { deleteTask } from '../features/todoSlice';
import ModalTodo from './ModalTodo';

const TodoList = () => {
  const todoList = useSelector(state => state.todoStore.todoList);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(deleteTask(id));
  }

  return (
    <TableContainer component={Paper} sx={{ width: '75%', margin: '0 auto', mt: 12 }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">Deadline</TableCell>
          <TableCell align="right">Status</TableCell>
          <TableCell align="right">Edit</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todoList.map((task, index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {task.title}
            </TableCell>
            <TableCell align="right">{task.description}</TableCell>
            <TableCell align="right">{task.date}</TableCell>
            <TableCell align="right">{task.status}</TableCell>
            <TableCell align="right">
             <ModalTodo action="Edit task" index={index}/>
            </TableCell>
            <TableCell align="right">
             <Button variant="contained" color="error" onClick={() => handleClick(index)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TodoList