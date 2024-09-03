import React , {useState} from "react"
import { AppBar, Button } from '@mui/material'
import { motion } from 'framer-motion'
import './App.css'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AppBar position='fixed' color='primary' sx={{top:'96%'}}>
        <Button varient="outlined" color="inherit" size="small" onClick={() => setIsOpen(!isOpen)}>click</Button>
      </AppBar>
      <div>
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className="parent"
      ></motion.div>
      </div>
    </>
  )
}

export default App
