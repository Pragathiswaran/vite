import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './components/signUp';
import LogIn from './components/logIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp home={Home}/>} />
        <Route path="/login" element={<LogIn home={Home}/>} />
      </Routes>
    </Router>
  );
}

export default App;
