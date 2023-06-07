import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/todoSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalTodo({ action, index }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setDescription('');
};

  const handleClick = () => {
    if (action === "Add Task") {
      dispatch(addTask({title, description, date}));
    } else {
      dispatch(editTask({title, description, date, index}));
    }
    setOpen(false);
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      {action === "Add Task" ?
      <Button onClick={handleOpen} variant="contained" sx={{backgroundColor: 'blue', color: 'white', margin: '0 auto', display: 'block', mt: 12, width: '150px'}}>{action}</Button>
      : <Button variant="contained" onClick={handleOpen}>{action}</Button>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleClick}>
          <Typography variant="h6" component="h2">Title of the task</Typography>
          <TextField id="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} sx={{mb: 4}} />
          <Typography variant="h6" component="h2">A description</Typography>
          <TextField id="title" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} sx={{mb: 4}}/>
          <Typography variant="h6" component="h2">A target Date</Typography>
          <TextField id="title" type={"date"} value={date} onChange={(e) => setDate(e.target.value)} sx={{display: 'block'}} />
          <Button onClick={handleClick} type="submit" variant="contained" sx={{backgroundColor: 'blue', color: 'white', mt: 4, mr: 4}}>Add Task</Button>
          <Button onClick={handleClose} variant="contained" sx={{backgroundColor: 'blue', color: 'white', mt: 4}}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}