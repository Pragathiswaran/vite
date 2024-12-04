import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Preline from './components/Preline.jsx'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Videos from './pages/Videos.jsx'
import Groups from './pages/Groups.jsx'
import Games from './pages/Games.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Preline />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Navigate to='/home' replace />} />
          <Route path='/home' element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/games" element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
