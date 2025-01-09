import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './components/Profile'
import SingleBlog from './pages/SingleBlog'
import BlogForm from './components/BlogForm'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post/:id' element={<SingleBlog />} />
        <Route path='/profile/createblog' element={<BlogForm />} />
      </Routes>
    </>
  )
}

export default App
