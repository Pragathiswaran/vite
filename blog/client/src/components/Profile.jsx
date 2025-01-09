import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const navigate = useNavigate();

  // Fetch user profile if logged in
  const fetchProfile = async () => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    if (!token) {
      // navigate('/login');
      return null;
      // return null; // Return null if no token
    }

    try {
      const response = await axios.get('http://localhost:8000/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response; 
    } catch (error) {
      return null; 
    }
  };

  const { data: user, isLoading } = useQuery({
    queryKey: ['profile'], 
    queryFn: fetchProfile, 
    retry: false, 
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const logoutHandler = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
    console.log('Logged out successfully');
  }

  return (
    <div className='container mx-auto mt-32'>
      <h1 className='text-3xl font-bold mb-14'>Profile</h1>
      <div className='flex items-center gap-4'>
        <div className='border-2 p-4 rounded-full border-gray-300'>
          <FontAwesomeIcon icon={faUserLarge} className='w-14 h-14' />
        </div>
        <div className='text-gray-600'>
          <h2 className='text-xl font-semibold'> {user.data.username}</h2>
          <h2 className='text-xl font-semibold'> {user.data.email}</h2>
        </div>
      </div>
      <div className='mt-20 flex gap-x-12'>
          <button className='bg-black text-white p-3 font-semibold'>
            <Link to="./createblog" state={user.data.username}>Create Post</Link>
          </button>
          <button className='bg-black text-white p-3 font-semibold' onClick={logoutHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
