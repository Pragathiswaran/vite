import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { UseContext } from '../context/UserContext';

const Profile = () => {
  
  // const navigate = useNavigate();
  const {user}  = useContext(UseContext);
  const Location = useLocation();
  const navigate = useNavigate()
  const [showProfile, setShowProfile] = useState(false)
  const checkHandler = () => {
    console.log('Button ckecked!!')
    alert(user.data.username);
  }

  useEffect(()=>{
    if(user){
      setShowProfile(true)
    } else{
      setShowProfile(false)
      navigate('/login')
    }
    console.log(user)
  },[Location.pathname])
  return (
    <div className='container mx-auto mt-32'>
      <h1 className='text-3xl font-bold mb-14'>Profile</h1>
      <div className='flex items-center gap-4'>
        <div className='border-2 p-4 rounded-full border-gray-300'>
          <FontAwesomeIcon icon={faUserLarge} className='w-14 h-14' />
        </div>
        {
          showProfile ? (
            <div className='text-gray-600'>
              <h2 className='text-xl font-semibold'> {user.data.username}</h2>
              <h2 className='text-xl font-semibold'> {user.data.email}</h2>
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
          className='bg-black text-white p-3 font-semibold' onClick={checkHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
