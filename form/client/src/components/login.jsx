import React from 'react'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const login = () => {
    const formSchema = z.object({
      username: z.string().min(1,"username is required").max(32),
      password: z.string().min(8,"password is required").max(16)
    });
    
    const { register,handleSubmit,formState: { errors }} = useForm({
      defaultValues:{
       username:"",
       password:"",
      }
      ,resolver: zodResolver(formSchema)
    })
    
    const onSubmit = (data) => console.log(data)
  
    return (
  <div className='flex justify-center mt-44'>
  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-80 border-2 border-black p-10'>
        <label htmlFor='username'>Username</label>
        <input {...register("username")} name="username" 
              className='border-2 border-black font-semibold px-2 py-1 focus:rounded-none '
        />
        {errors.username && <span className='text-red-600'>{errors.username.message} </span>}
        
        <label htmlFor='password' className='mt-10'>Password</label>
          <input {...register("password")} name='password' 
                className='border-2 border-black px-2 py-1 focus: rounded-none'/>
        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
  
        <button type="submit" className='bg-blue-600 text-white mt-5 py-2'>Login</button>
      </form>
  </div>
    )
  
}

export default login
