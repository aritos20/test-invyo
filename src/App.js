import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Data from './pages/data/Data';
import Todo from './pages/todo/Todo';
import Login from './pages/login/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './components/AuthProvider';


function App() {

  return (
    <AuthProvider>
      <BrowserRouter basename='/test-invyo'>
      <PrivateRoute>
        <NavBar />
      </PrivateRoute> 
        <Routes>
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<PrivateRoute> <Todo /> </PrivateRoute> } />
          <Route path="/data" element={<PrivateRoute> <Data /> </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
