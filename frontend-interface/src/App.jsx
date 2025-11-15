import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage';
import ChatPage from './components/ChatPage/ChatPage';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Chat/:username" element={<ChatPage />} /> 
    </Routes>
   );
}

export default App;