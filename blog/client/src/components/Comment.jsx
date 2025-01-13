import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const commentSchema = z.object({
  comment : z.string().min(3, 'Comment must be at least 3 characters long')
})

const Comment = () => {

  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  // const { username } = user;
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({
    resolver: zodResolver(commentSchema)
  });

  const CreateComment = async (data) => {
    const response = await axios.post('/post/comment',{
      comment: data.comment,
      username: user.username,
      postid: id  
    })

    console.log(response);
    return response;
  }

  const mutation = useMutation({
    mutationFn: CreateComment,
    onSuccess:(data) =>{
      alert('Comment created successfully');
      reset();
    },

    onError: (error) => {
      alert('Error creating comment');
      console.log('Failed to create comment: ' + error);
    }
  })

  const submitComment = (data) => {
    mutation.mutate(data);
    console.log(data.comment);
   if(user === null){
    console.log('no user data');
   }

  //  alert(username);
    console.log(id)
    reset();
  }

  return (
    <>
      <form className="w-2/3 flex flex-col space-y-4" onSubmit={handleSubmit(submitComment)}>
        <div className="flex flex-col">
          <textarea name="comment" id="comment" className="border-2 border-black p-3" {...register('comment')}></textarea>
          <div style={{ height: '1rem' }}>
            {errors.comment && ( <p className="text-red-500">{errors.comment.message}</p> )}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="bg-black text-white p-3 rounded">comment</button>
        </div>
      </form>
    </>
  )
}

export default Comment