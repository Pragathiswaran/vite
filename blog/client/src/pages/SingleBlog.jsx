import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Comment from '../components/Comment'

const SingleBlog = () => {

    const { id } = useParams();
    
    const fetchBlog = async () => {
        const response = await axios.get(`/post/${id}`);
        return response.data;
    }

    const { data: blog, isLoading, isError } = useQuery({
        queryKey: [`/post/${id}`],
        queryFn: fetchBlog,
        retry: false,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }


  return (
    <div className='mb-20 mx-40'>
        <div className='mt-32 '>
            <h1 className='text-center text-3xl font-semibold my-10'>{blog.blogname}</h1>
            <img src="../blogs/download.jpg" alt="mern stack" className='w-[800px] mx-auto my-10'/>
            <p className='w-full'>{blog.blog}</p>
        </div>
        <div className='mt-20 '>
            {blog.comments.map((comment) => (
                <div className='bg-gray-500 px-5 py-6 my-3 rounded-lg' key={comment._id}>
                    <div className='flex justify-between'>
                        <div>
                            {comment.name}
                        </div>
                        <div className='flex gap-5'>
                            <div>{comment.date}</div>
                            <div>{comment.time}</div>
                        </div>
                    </div>
                <div className='mt-2 mx-20'>
                    {comment.comment}
                </div>
            </div>
            ))}
        </div>
        <div className='w-full mt-10 mx-32'>
            <Comment />
        </div>
    </div>
  )
}

export default SingleBlog