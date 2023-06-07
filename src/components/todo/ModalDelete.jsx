import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteTask } from '../../features/todoSlice'
import { useDispatch } from 'react-redux';

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

export default function ModalDelete({ index }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const handleClick = () => {
    dispatch(deleteTask(index));
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleOpen}>Delete</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure that you want to delete this task?
          </Typography>
          <Button onClick={handleClick} type="submit" variant="contained" sx={{backgroundColor: 'blue', color: 'white', mt: 4, mr: 4}}>Delete Task</Button>
          <Button onClick={handleClose} variant="contained" sx={{backgroundColor: 'blue', color: 'white', mt: 4}}>Cancel action</Button>
        </Box>
      </Modal>
    </div>
  );
}