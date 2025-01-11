import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const context = createContext();

const UserContext = ({children}) => {
   
  const location = useLocation();
  const Navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:8000/profile', { withCredentials: true });
        if (response.status === 200) {
          setUser(response); 
        } 

        if (response.status === 401) {
          setUser({});
          Navigate('/login');
        }
      } catch (error) {
        setUser(null);
      }
    };
    
    fetchUser();
    // alert('fetching user');
  }, [location.pathname]); 

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  );
};

export { UserContext, context as UseContext };

