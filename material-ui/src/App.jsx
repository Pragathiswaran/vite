import React from 'react'
import Navbar from "./component/Navbar/navbar"
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Authentication from './pages/navbarPages/authentication';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
