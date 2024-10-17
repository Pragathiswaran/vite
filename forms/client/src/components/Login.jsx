import React,{useState} from 'react'

const Login = () => {
  const [login, setLogin ] =useState({
    username:'',
    password:''
  })

  const loginHandle = async(e) =>{
    e.preventDefault()
    if(!login || !login.username || !login.password){
      console.warn('Fiil the login Form');
      return ;
    }

    try{
      const respond = await fetch('http://localhost:8000/api/login',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login)
      })

      if(respond.ok){
        const result = await respond.json()
        console.log('User logged in successfully', result);

        setLogin({username:'', password:''})
      } else{
        console.error('User not found')
      }
    } catch(error){
      console.error(error)
    }
  }

  return (
    <>
      <main className='mt-40 w-full grid place-content-center'>
        <form className='flex flex-col p-10 px-20 rounded-lg shadow-2xl' onSubmit={ e=>loginHandle(e)}>
        <h1 className='text-2xl text-center font-sans font-semibold mb-6'>Register</h1>
           <div className='flex flex-col mb-1'>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" 
                className='border border-gray-950 w-52 p-1 px-3 rounded'
                value={login.username}
                onChange={(e) => setLogin({...login, username:e.target.value})}
              />
           </div>
           <div className='flex flex-col mb-1'>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" 
                className='border border-gray-950 w-52 p-1 px-3 rounded'
                value={login.password}
                onChange={(e) => setLogin({...login, password:e.target.value})}
              />
           </div>
           <div className='mt-1 '>
            <input type="checkbox" name="check" id="check" className='mr-2'/>
            <label htmlFor="check">Remember me</label>
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

export default Login 
