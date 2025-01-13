import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import SingleBlog from './pages/SingleBlog'
import BlogForm from './components/BlogForm'
import NavBar from './components/NavBar'
import axios from 'axios'
import { UserContextProvider } from './context/UserContext'

const App = () => {

  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  axios.defaults.withCredentials = true;
  
  return (
    <>
    <UserContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post/:id' element={<SingleBlog />} />
        <Route path='/profile/createblog' element={<BlogForm />} />
      </Routes>
    </UserContextProvider>
      
    </>
  )
}

export default App
