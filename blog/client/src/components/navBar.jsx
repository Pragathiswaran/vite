import React from 'react'
import { Link } from 'react-router-dom'

function navBar() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>about</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default navBar