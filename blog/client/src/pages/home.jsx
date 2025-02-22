import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Home = () => {

  const fetchBlog = async () => {
    const response = await axios.get('/',{ withCredentials: true });
    return response.data;
  }

  const { data: user, isLoading, isError  } = useQuery({
    queryKey: ['/'],
    queryFn: fetchBlog,
    retry: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <>
    <main className='mt-40 mx-36'>
      <section className='flex flex-col justify-center items-center'>
        {
          user.map((post) => (
            <Link to={`/post/${post._id}`} className='flex w-3/4 border p-2 mt-4' key={post._id}>
              <>
              <div className='p-2'>
                <img src={`./blogs/${post.imageUrl}`}
                alt="blog images" className='w-[500px] h-[200px] object-center'/>
              </div>
              <div className='py-2'>
                <h2 className='font-semibold text-3xl pb-2'>{post.blogname}</h2>
                <article>{post.blog}</article>
              </div>
              </>
          </Link>
          ))
        }
        
      </section>
     
    </main>
    </>
  )
}

export default Home