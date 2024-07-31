import { useForm } from "react-hook-form"
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

export default function signup() {

    const formSchema = z.object({
        username: z.string().min(1,"username is required").max(32),
        password: z.string().min(8,"password is required").max(16),
        email: z.string().email("email is required")
    })
    const {register, handleSubmit, formState : {errors}} = useForm({
    defaultValues:{
      username:"",
      password:"",
      email:""
    },resolver:zodResolver(formSchema)
    })

    const onSubmit = (data) => console.log(data)
  return (
    <div className="flex justify-center mt-44">
        <form onSubmit = {handleSubmit(onSubmit)} className='flex flex-col w-80 border-2 border-black p-10'>
            <label htmlFor='username'>Username</label>
            <input {...register("username")} name="username" 
                className='border-2 border-black font-semibold px-2 py-1 focus:rounded-none '
            />
            {errors.username && <span className='text-red-600'>{errors.username.message} </span>}
            
            <label htmlFor='password' className='mt-10'>Password</label>
            <input {...register("password")} name='password' 
                    className='border-2 border-black px-2 py-1 focus: rounded-none'/>
            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
            
            <label htmlFor='email' className='mt-10'>Email</label>
            <input {...register("email")} name='email' 
                    className='border-2 border-black px-2 py-1 focus: rounded-none'/>
            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
            
            <button type="submit" className='bg-blue-600 text-white mt-5 py-2'>Signup</button>
        </form>
    </div>
  )
}
