import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

axios.defaults.withCredentials = true

const Login = () => {

    const navigate = useNavigate();
    const loginSchema = z.object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(8, { message: 'Password must be at least 8 characters' })
    });

    const { register, handleSubmit, setError, formState: { errors }} = useForm({
        resolver: zodResolver(loginSchema)
    });

    const loginUser = async (userData) => {
        const response = await axios.post('http://localhost:8000/login', userData, { 
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    }

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            navigate('/');
            console.log(data.cookie);
        },
        onError: (error) => {
           if(error.response.status === 404){
               setError('email', { message: 'Invalid email or password' });
           } else {
                alert('Login failed: ' + error.response?.data?.message || error.message);
           }
        }
    });

    
    const Login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
           try {
            const credentials = tokenResponse.access_token;
            const response = await axios.post('http://localhost:8000/login', { token:credentials });

            if(response.status === 200){
                navigate('/');
                alert('Login successful!');
            }

           } catch (error) {
                if(error.response.status === 404){
                    alert('Email already exists!');
                } else {
                    alert('Login failed: ' + error.response?.data?.message || error.message);
                }
           }
        },
        onError: (error) => {
            console.log(error);
        }
    })

    const onSubmit = (data) => {
        mutation.mutate(data);
    };
    return (
        <div className="max-w-md mx-auto mt-40 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input {...register('email')} type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Password:</label>
                    <input {...register('password')} type="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-700">Login</button>
            </form>
            <p className="mt-2 text-end"><Link to="/forgot-password" className="text-indigo-700">Reset password</Link></p>
            <hr className="my-4" />
            <div className='flex justify-center items-center mt-4 gap-x-11'>
               <button className='bg-red-500 text-white p-2 size-10 rounded-full'
                    onClick={()=> Login()}>
                    <FontAwesomeIcon icon={faGoogle} />
               </button>
               <button className='bg-black text-white p-2 size-10 rounded-full'>
                    <FontAwesomeIcon icon={faGithub} />
               </button>
            </div>
            <p className="mt-4 text-center">Don't have an account? <Link to="/register" className="text-indigo-700">Register</Link></p>
        </div>
    );
}

export default Login;
