import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display: 'flex', gap: '16px'}}>
          <Button color="inherit">Logout</Button>
          <Button color="inherit">My Tasks</Button>
          <Button color="inherit">Data</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}