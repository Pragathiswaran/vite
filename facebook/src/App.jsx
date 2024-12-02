import React from 'react'
import Topbar from './components/Topbar'
import {Outlet} from 'react-router-dom'


const App = () => {

  return (
    <>
      <Topbar />
      <Outlet />
    </>
  )
}

export default App