import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const blogSchema = z.object({
  blogName: z.string().min(3, 'Blog name must be at least 3 characters long'),
  author: z.string().min(3, 'Author name must be at least 3 characters long'),
  blog: z.string().min(10, 'Blog content must be at least 10 characters long'),
});

const BlogForm = () => {

  const { user }  = useContext(UserContext);
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(blogSchema),
  });

  const createBlog = async (data) => {
    const response = await axios.post('/profile/createblog', {
      blogname: data.blogName,
      blog: data.blog,
      author: user.username, 
    });
    
    console.log(response);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      alert('Blog created successfully');
      reset();
    },
    onError: (error) => {
      alert("Failed to create blog");
      console.log('Failed to create blog: ' + error.response?.data?.message || error.message);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-xl mx-auto mt-32 p-5 bg-gray-100 shadow-lg rounded-md">
      <h1 className="text-2xl font-bold mb-5">Create a New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Blog Name */}
        <div>
          <label htmlFor="blogName" className="block font-semibold">
            Blog Name
          </label>
          <input
            type="text"
            id="blogName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            {...register('blogName')}
          />
          {errors.blogName && (
            <p className="text-red-500 text-sm">{errors.blogName.message}</p>
          )}
        </div>

        {/* Author Name */}
        <div>
          <label htmlFor="author" className="block font-semibold">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            {...register('author')}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        {/* Blog Content */}
        <div>
          <label htmlFor="blog" className="block font-semibold">
            Blog Content
          </label>
          <textarea
            id="blog"
            rows="5"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            {...register('blog')}
          ></textarea>
          {errors.blog && (
            <p className="text-red-500 text-sm">{errors.blog.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
