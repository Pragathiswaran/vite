import React from 'react'
import { Router, Routes, Route,Link } from "react-router-dom";
import './App.css'
import Login from './components/login'
import Register from './components/register';
import Home from './pages/home';
import NavBar from './components/navBar';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
    
  )
}
