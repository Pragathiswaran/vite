import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
    <div>
        {isLogin ? <FontAwesomeIcon icon={faUserLarge} className='w-7 h-7'/> : 
            <div>
                <Link to='/login' className='text-white'>Login</Link>
                <Link to='/register' className='text-white'>Register</Link>
            </div>
        }
    </div>
    </>
  )
}

export default Profile