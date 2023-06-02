import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './pages/data/Data';
import Todo from './pages/todo/Todo';
import Login from './pages/login/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route index path="/todo" element={<Todo />} />
        <Route index path="/data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
