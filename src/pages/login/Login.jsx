import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.dispatch({type: 'LOGIN', value: {email, password}});
    navigate('/todo');
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#E3E3EE',
        width: '35%',
        minWidth: '280px',
        padding: '30px 0',
        margin: '0 auto',
        mt: '80px',
        borderRadius: '12px'}}>
      <Typography variant="h2">Login</Typography>
      <TextField id="email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <TextField id="password" label="Password" variant="standard" type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit">Log In </Button>
    </Box>
  )
}

export default Login