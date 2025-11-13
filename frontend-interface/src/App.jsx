import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} /> 
    </Routes>
   );
}

export default App;