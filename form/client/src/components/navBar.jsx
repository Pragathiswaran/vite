import React from 'react'
import { Link } from 'react-router-dom'

const navBar = ()=> {
  return (
    <nav className='bg-blue-600 text-white py-4'>
        <ul className='flex justify-around'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/register'>Register</Link>
            </li>
        </ul>
    </nav>
  )
}

export default navBar
