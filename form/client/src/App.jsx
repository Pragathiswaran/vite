import React from 'react'
import { Router, Routes, Route,Link } from "react-router-dom";
import './App.css'
import Login from './components/login'
import Signup from './components/signup';
import Home from './pages/home';
export default function App() {
  return (
    <>
      <nav className='bg-blue-500 text-white py-4'>
        <ul className='flex justify-around'>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
    
  )
}
