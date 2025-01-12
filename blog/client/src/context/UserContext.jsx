import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const context = createContext({});

const UserContext = ({children}) => {
   
  const location = useLocation();
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user){
      axios.get('http://localhost:8000/profile',{ withCredentials: true}).then(({data})=>{
        setUser(data)
      }).catch((data)=>{
        if(data.status === 401){
          setUser(null)
        }
      })
    }
  }, [location.pathname]); 

  return (
    <context.Provider value={{ user, setUser }}>
      {children}
    </context.Provider>
  );
};

export { UserContext, context as UseContext };

