import {React,useState, useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
// import Profile from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UseContext } from '../context/UserContext';

function navBar() {
  
  const {user} = useContext(UseContext);
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   if(user){
    setIsLogin(true)
   } else {
    setIsLogin(false)
   }
  }, [location.pathname]);

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
            isLogin ? <FontAwesomeIcon icon={faUserLarge} className="w-7 h-7" 
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

export default navBar