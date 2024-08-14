import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navBar'
import Home from './pages/home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
