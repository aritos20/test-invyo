import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useAuth } from './AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    auth.dispatch({type: 'LOGOUT'});
    navigate('/login');
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{display: 'flex', gap: '16px'}}>
          <Button color="inherit" onClick={handleClick}>Logout</Button>
          <Link to="/todo" style={{textDecoration: 'none', color: 'inherit'}}>
            <Button color="inherit">My Tasks</Button>
          </Link>
          <Link to="/data" style={{textDecoration: 'none', color: 'inherit'}}>
            <Button color="inherit">Data</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}