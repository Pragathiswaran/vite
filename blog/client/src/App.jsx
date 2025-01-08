import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
