import {React,useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Profile from './Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

function navBar() {
  const nagivate = useNavigate();
  const [user, setUser] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setUser(false);
      nagivate('/login');
    } else {
      setUser(true);
    }
  }, []);

  return (
    <>
    <header className='bg-black text-white fixed w-full z-10 top-0'>
      <nav className='flex justify-between py-4 px-5 items-center'>
        <section>
          <div className='font-bold text-xl cursor-pointer' onClick={() => nagivate('/')}>
            Express-Blog
          </div>
        </section>
        {/* <section className='flex justify-between w-1/4'>
          <div>Home</div>
          <div>About</div>
          <div>Artcles</div>
        </section> */}
        <section>
          {
            user ? <FontAwesomeIcon icon={faUserLarge} className="w-7 h-7" 
            onClick={() => nagivate('/profile')}/> 
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