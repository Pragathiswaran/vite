import React from 'react'
import { Link } from 'react-router-dom'

function navBar() {
  return (
    <>
      <nav className='text-gray-700 flex justify-between p-5 drop-shadow-xl bg-fuchsia-50 z[1000]'>
        <div className='pl-10'>
            logo
        </div>
        <div className='flex gap-x-20'>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
        </div>
        <div className='pr-10'>
            profile
        </div>
      </nav>
    </>
  )
}

export default navBar