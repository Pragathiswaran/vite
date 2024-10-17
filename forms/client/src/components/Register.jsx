import React, { useState } from 'react'

const Register = () => {

  const [register, setRegister] = useState({
    username:'',
    email:'',
    password:''
  })

  const registerHandle = async (e) => {
    e.preventDefault();
    
    if (!register || !register.username || !register.email || !register.password) {
      console.warn('Form is incomplete');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(register)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        
        setRegister({ username: '', email: '', password: '' });
      } else {
        console.error('Registration failed:', response.status);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  

  return (
    <>
    <main className='mt-40 w-full grid place-content-center'>
        <form className='flex flex-col p-10 px-20 rounded-lg shadow-2xl' onSubmit={ e=>registerHandle(e)}>
        <h1 className='text-2xl text-center font-sans font-semibold mb-6'>Register</h1>
           <div className='flex flex-col mb-1'>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" 
                className='border border-gray-950 w-52 p-1 px-3 rounded'
                value={register.username}
                onChange={(e) => setRegister({...register, username:e.target.value})}
              />
           </div>
           <div className='flex flex-col mb-1'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" 
                className='border border-gray-950 w-52 p-1 px-3 rounded'
                value={register.email}
                onChange={(e) => setRegister({...register, email:e.target.value})}
              />
           </div>
           <div className='flex flex-col mb-1'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" 
                className='border border-gray-950 w-52 p-1 px-3 rounded'
                value={register.password}
                onChange={(e) => setRegister({...register, password:e.target.value})}
              />
           </div>
            <div className='mt-5 text-center'>
               <button type='submit' className='bg-blue-600 text-white py-1 px-3 rounded-md'>
                    Register
                </button>
            </div>
        </form>
    </main>
    </>
  )
}

export default Register