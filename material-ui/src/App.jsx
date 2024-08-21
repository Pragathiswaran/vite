import React from 'react'
import Navbar from "./component/Navbar/navbar"
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';

function App() {

  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  )
}

export default App
