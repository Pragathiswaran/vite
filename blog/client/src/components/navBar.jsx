import {React,useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const NavBar = () => {
  
  const {user} = useContext(UserContext);
  const navigate = useNavigate();
  
  return (
    <>
    <header className='bg-black text-white fixed w-full z-10 top-0'>
      <nav className='flex justify-between py-4 px-5 items-center'>
        <section> 
          <div className='font-bold text-xl cursor-pointer' onClick={() => navigate('/')}>
            Express-Blog
          </div>
        </section>
        <section>
          {
            user ? <FontAwesomeIcon icon={faUserLarge} className="w-7 h-7" 
            onClick={() => navigate('/profile')}/> 
              : (
                <div>
                  <Link to='/login'>Login</Link> / <Link to='/register'>Register</Link>
                </div>
              )
          }
        </section>
      </nav>
    </header>
    </>
  )
}

export default NavBar