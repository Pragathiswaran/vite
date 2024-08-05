import React from 'react'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const login = () => {

  const navigate = useNavigate()

  const formSchema = z.object({
    email: z.string()
    .email("Email is required"),
    password: z.string()
          .min(1,"Password is required")
          .max(16,"Paasword must be below 16 characters")
          .refine(value=>value.length >= 8,{message: "Password must be at least 8 characters"})
  })
    
    const { register,handleSubmit,setError, formState: { errors, isSubmitting }} = useForm({
      defaultValues:{
       email:"",
       password:"",
      }
      ,resolver: zodResolver(formSchema)
    })
    
    const onSubmit = async (value) => {
      console.log(value)
      const {email, password } = value
      try{
        const { data } = await axios.post('/login',{
          email,
          password
        })
        if(data.error){
          console.log(data)
          setError(data.path,{
            type:'server',
            message:data.error
          })
        } else {
          console.log("login success full\n" + data.message)
          navigate('/')
        }
      }catch(err){
        console.log(err)
      }
    }
  
    return (
  <div className='flex justify-center mt-44'>
  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-80 border-2 border-black p-10'>
        <label htmlFor='email'>Email</label>
        <input {...register("email")} name="email" 
              className='border-2 border-black font-semibold px-2 py-1 focus:rounded-none '
        />
        {errors.email && <span className='text-red-600'>{errors.email.message} </span>}
        
        <label htmlFor='password' className='mt-10'>Password</label>
          <input {...register("password")} name='password' 
                className='border-2 border-black px-2 py-1 focus: rounded-none'/>
        {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
  
        <button type="submit" disabled={isSubmitting} className='bg-blue-600 text-white mt-5 py-2'>
        {isSubmitting ? 'Submitting...' : 'Login'}
        </button>
      </form>
  </div>
    )
  
}

export default login
