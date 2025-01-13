import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {
   
  const Location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user){
      axios.get('http://localhost:8000/profile',{ withCredentials: true}).then(({data})=>{
        setUser(data)
        console.log('Data Fetched',data)
      }).catch((err)=>{
        if(err.response.status === 401){
          // setUser(null)
          console.log('User not found')
        }
      })
    }

    console.log('UserContextProvider', user)
  }, [Location.pathname]); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


