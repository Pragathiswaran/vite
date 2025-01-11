import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const naviagte = useNavigate();
    const getData = async () =>{
        const userData = {
          "data": "praga"
        }
       const response = await axios.post('http://localhost:8000', userData, { withCredentials: true });
         console.log(response.data);
         if(response.status === 200){
            naviagte('/dashboard')
         }else {
            alert('error')
            return null
         }
    } 


  return (
    <div>
        <button style={{margin:30}} onClick={()=>getData()}>Click</button>
    </div>
  )
}

export default Home