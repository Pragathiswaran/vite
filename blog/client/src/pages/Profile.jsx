import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Cookies from 'js-cookie';

const Profile = () => {
  
  const {user, setUser}  = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const LogoutHandler = () => {
    // setUser(null);
    navigate('/login')
    Cookies.remove('token');
  }

  const CheckDataHandler = () => {
    console.log(import.meta.env.VITE_API_URL)
  }
  return (
    <div className='container mx-auto mt-32'>
      <h1 className='text-3xl font-bold mb-14'>Profile</h1>
      <div className='flex items-center gap-4'>
        <div className='border-2 p-4 rounded-full border-gray-300'>
          <FontAwesomeIcon icon={faUserLarge} className='w-14 h-14' />
        </div>
        {
          edit ? (
            <div className=''>
              <form className='flex flex-col gap-y-4 w-96'>
                <input type="text" className='px-3 py-2 border-2' value={user.username}/>
                <input type="text" className='px-3 py-2 border-2' value={user.email}/>
              </form>
          </div>
          ) : user ? (
            <div className='text-gray-600'>
              <h2 className='text-xl font-semibold'> {user.username}</h2>
              <h2 className='text-xl font-semibold'> {user.email}</h2>
            </div>
          ) : (
            <div className='text-gray-600'>
              <h2 className='text-xl font-semibold'>Not Found!!!</h2>
            </div>
          )
        }
      </div>
      <div className='mt-20 flex gap-x-12'>
          <button className='bg-black text-white p-3 font-semibold'>
            <Link to="./createblog" >Create Post</Link>
          </button>
          <button type="button"
          className='bg-black text-white p-3 font-semibold' onClick={CheckDataHandler}>Log Out</button>
          <button className='bg-black text-white p-3 font-semibold'
          onClick={() => setEdit(!edit)}
          >{!edit ? 'Edit' : 'submit'}</button>
      </div>
    </div>
  );
};

export default Profile;
