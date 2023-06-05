import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Data from './pages/data/Data';
import Todo from './pages/todo/Todo';
import Login from './pages/login/Login';
import NavBar from './components/NavBar';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log(loggedIn);
    setLoggedIn(true);
  }

  return (
    <BrowserRouter>
    <PrivateRoute>
      <NavBar />
    </PrivateRoute> 
      <Routes>
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/todo" element={<PrivateRoute loggedIn={loggedIn}> <Todo /> </PrivateRoute> } />
        <Route path="/data" element={<PrivateRoute loggedIn={loggedIn}> <Data /> </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
