import React from 'react'
import axios from 'axios';

const Dashboard = () => {

  const gertData = async () => {
        const res = await axios.get('http://localhost:8000/dashboard', { withCredentials: true });
        console.log(res.data);
        if(res.status === 200){
            console.log('success')
            alert('success')
        } else {
            console.log('error')
            alert('error')
        }
    }   
  return (
    <div style={{margin:30}}>
        Dashborad
        <button onClick={gertData}>Get Data</button>
    </div>
  )
}

export default Dashboard