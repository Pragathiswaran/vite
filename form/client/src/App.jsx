import React from 'react'
import './App.css'

function App() {
 
  return (
    <>
      <div className='w-80 mx-auto mt-64 p-10 backdrop-blur-m shadow-2xl'>
        <form className='flex flex-col gap-2 justify-center align-center'>
          <input className='border border-black' type='text' placeholder='Username'/>
          <input className='border border-black' type='text'placeholder='Password'/>
          <button className='border border-black' type='submit'>Log in</button>
        </form>
      </div>
    </>
  )
}

export default App
