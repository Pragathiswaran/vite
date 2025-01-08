import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate} from 'react-router-dom';


const RegisterForm = () => {
  // Zod Schema for form validation
  const schema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number')
      .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),
  });

  // react-hook-form setup
  const { register, handleSubmit, setError, formState: { errors },} = useForm({
    resolver: zodResolver(schema),
  });

  // Axios API call to register user
  const registerUser = async (userData) => {
    const response = await axios.post('http://localhost:8000/register', userData);
    return response.data;
  };

  // useMutation to handle API request
    const mutation = useMutation({
      mutationFn: registerUser,
      onSuccess: () => {
        alert('Registration successful!');
      },
      onError: (error) => {
        if(error.response.status === 409){
          alert('Email already exists!')
        }else{
          alert('Registration failed: ' + error.response?.data?.message || error.message);
        }
      },
    });

    const navigate = useNavigate();
    
    const login = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try{
          const credentials = tokenResponse.access_token;
          const response = await axios.post('http://localhost:8000/register',{ token:credentials} );

          if(response.status === 201){
            alert('register successful!');
          }

        }catch(err){
          if(err.response.status === 409){
            alert('Email already exists!')
            }else{
              alert('Login failed: ' + err.response?.data?.message || err.message);
              }
        }
      },
      onError: (error) => {
        console.error(error);
        alert('Google login error');
      }
    })

  // Form submission handler
  const onSubmit = (data) => {
    mutation.mutate(data);  // Trigger mutation
  };

  return (
    <div className="mt-20 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        {/* Username Field */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register('username')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={mutation.isLoading}
            className="w-full py-2 px-4 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          >
            {mutation.isLoading ? 'Registering...' : 'Register'}
          </button>
        </div>

        {/* Social Auth */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Or register with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              className="py-2 px-4 border rounded-md text-gray-700 bg-white"
              onClick={() => login()}
            >
              <FontAwesomeIcon icon={faGoogle} /> Google
            </button>
            <button
              type="button"
              className="py-2 px-4 border rounded-md text-gray-700 bg-white"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </button>
          </div>
        </div>
        
        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Already have an account?
            <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
