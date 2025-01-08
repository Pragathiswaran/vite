import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'

function navBar() {
  return (
    <>
    <header className='bg-black text-white fixed w-full z-10 top-0'>
      <nav className='flex justify-between py-4 px-5 items-center'>
        <section>
          <div className='font-bold text-xl'>
            Express-Blog
          </div>
        </section>
        {/* <section className='flex justify-between w-1/4'>
          <div>Home</div>
          <div>About</div>
          <div>Artcles</div>
        </section> */}
        <section>
          <div><Profile/></div>
        </section>
      </nav>
    </header>
    </>
  )
}

export default navBar