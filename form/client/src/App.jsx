import React from 'react'
import './App.css'
import {useForm}  from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

function App() {
 
  const form = useForm()
  const {register,unregister , control} = form
  return (
    <div className='w-80 mx-auto mt-28 border-4 p-10 border-black'>
      <form className='flex flex-col'>
        <label htmlFor='username'>username</label>
        <input 
            type="text" 
            className='border-2 border-black'
            {...register('username')}
        />

        <label htmlFor='password'>password</label>
        <input 
            type="text" 
            className='border-2 border-black'
            {...register('password')}
        />
        <button className='border-2 border-black mt-3'>Submit</button>
      </form>
      <DevTool control={control}/>

    </div>
  )
}

export default App
