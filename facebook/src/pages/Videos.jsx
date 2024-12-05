import React,{ useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faVideo, faRocket, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Post from '../components/Post'
// import { useState } from 'react'

const PostData = [
  {
    id:1,
    username:'Pragathiswaran M',
    thumbnails:'This is my first post',
    time:'2h',
    likes: 10,
    comments: 5,
    shares: 0
  },
  {
    id:2,
    username:'Meena',
    thumbnails:'',
    time:'28 November 15:28',
    likes: 1,
    comments: 5,
    shares: 2
  },
]

const icons = [
  {id: 1, icon: faYoutube, text: 'Home'},
  {id: 2, icon: faVideo, text: 'Live'},
  {id: 3, icon: faVideo, text: 'Reels'},
  {id: 4, icon: faVideo, text: 'Shows'},
  {id: 5, icon: faRocket, text: 'Explore'},
  {id: 6, icon: faBookmark, text: 'Saved'},
]

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className='flex justify-between pt-3'>
        <div className='inline-block text-2xl font-bold'>Video</div>
          <button className='inline-flex justify-center items-center ml-2 bg-gray-200 size-[32px] rounded-full text-xl hover:bg-gray-300'>
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
        <div className='pt-4'>
          <input type="text" className='bg-gray-100 px-3 py-2 text-md text-gray-400 rounded-full w-full outline-none' placeholder='Search Video'/>
        </div>
        <ul className='pt-4'>
          { icons.map(items => (
            <button className='py-2.5 px-1.5 rounded-lg flex items-center hover:bg-gray-100 focus:bg-gray-100 w-full' aria-selected={activeTab === items.id ? true : false} key={items.id}>
              <div className='inline-flex justify-center items-center ml-2 bg-gray-200 size-[36px] rounded-full text-xl'>
                <FontAwesomeIcon icon={items.icon} />
              </div>
              <span className='ml-3 text-md font-semibold mx-auto'>{items.text}</span>
            </button>
            ))}
        </ul>
    </>
  )
}

const Videos = () => {
  return (
    <>
      <div className='relative grid grid-cols-[1fr,3fr] mt-14'>
        <div className='fixed left-0 w-1/4 h-full bg-white-0 shadow-r px-3'>
          <SideBar />
        </div>
        <div className='relative ml-96 scrollbar-smooth'>
        <div className='mx-52 w-[700px]'>
            {PostData.map((data) => ( <Post key={data.id} data={data} />))}
        </div>
        </div>
      </div>
    </>
  )
}

export default Videos