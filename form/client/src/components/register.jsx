import { useForm } from "react-hook-form"
import { setErrorMap, z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function register() {

  const navigate = useNavigate()
  const formSchema = z.object({
      username: z.string()
            .min(1,"Username is required")
            .max(32,'Username is too longer'),
      email: z.string()
            .min(1,'Email is required')
            .email("Valid email require"),
      password: z.string()
            .min(1,"Password is required")
            .max(16,"Paasword must be below 16 characters")
            .refine(value=>value.length >= 8,{message: "Password must be at least 8 characters"}),
  })

  const {register, handleSubmit,setError, formState : {errors,isSubmitting}} = useForm({
  defaultValues:{
    username:"",
    email:"",
    password:""
  },resolver:zodResolver(formSchema)
  })

  const onSubmit = async (value) =>{ 

    const {username, email, password} = value  
   try{
    const { data } = await axios.post('./register',{
      username,
      email,
      password
    })
    if(data.error){
    //  const errorMessage = data
     setError(data.path,{
      type:'server',
      message:data.error
     })
    console.log(data)
    } else {
      console.log("login success full\n" + data)
      navigate('/')
    }
   }catch(err){
      console.log(err)
   }

  //  console.log(username)
  }
  
  return (
    <div className="flex justify-center mt-32">
        <form onSubmit = {handleSubmit(onSubmit)} className='flex flex-col w-80 border-2 border-black p-10'>
            <label htmlFor='username'>Username</label>
            <input {...register("username")} name="username" 
                className='border-2 border-black font-semibold px-2 py-1 focus:rounded-none '
            />
            {errors.username && <span className='text-red-600'>{errors.username.message} </span>}
            
            <label htmlFor='email' className='mt-10'>Email</label>
            <input {...register("email")} name='email' 
                    className='border-2 border-black px-2 py-1 focus: rounded-none'/>
            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

            <label htmlFor='password' className='mt-10'>Password</label>
            <input {...register("password")} name='password' 
                    className='border-2 border-black px-2 py-1 focus: rounded-none'/>
            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
            
            <button type="submit" disabled={isSubmitting}className='bg-blue-600 text-white mt-5 py-2'>
            {isSubmitting ? "Submiting..." : 'Signup'}
            </button>
        </form>
    </div>
  )
}
