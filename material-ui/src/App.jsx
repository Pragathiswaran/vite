import React from 'react'
import Navbar from "./component/Navbar/navbar"
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';


function App() {

  return (
    <>
      <Grid container columns={12}>
        <Grid item xs={2} >
          <Navbar />
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  )
}

export default App
