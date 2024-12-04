import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX, faEarthAmericas, faShare } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Post = (props) => {

  const icons = [
    [
      { id: 1, icon: faEllipsis, },
      { id: 2, icon: faX, },
    ],
      [
        {
          id: 1,
          icon: faThumbsUp,
          text: 'Like',
        },
        {
          id: 2,
          icon: faComment,
          text: 'Commets',
        },
        {
          id: 3,
          icon: faWhatsapp,
          text: 'Send',
        },
        {
          id: 4,
          icon: faShare,
          text: 'Share',
        },
      ]    
    ]
  return (
   <>

<div className="flex flex-col group bg-white shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition mt-2 w-full">
  <div className="bg-white rounded-t-xl py-2 px-4 md:pt-3 md:pb-2 md:px-5 flex justify-between w-full">
    <div className="flex">
      <img className="inline-block size-[42px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
      <div className='flex flex-col ml-3'>
        <span className="text-gray-900 text-md font-bold">{props.data.username}</span>
        <div className='inline-flex mt-1'>
          <span className="text-gray-500 text-xs">{props.data.time}</span>
          <FontAwesomeIcon icon={faEarthAmericas} className='text-sm mx-1 text-gray-400'/>
        </div>
      </div>
    </div>
    <div className='my-auto'>
      {
        icons[0].map((items) => (
            <button type="button" key={items.id} className="inline-flex items-center justify-center size-8 gap-x-4 mx-2 text-sm font-medium rounded-full border border-transparent text-black hover:bg-gray-10 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-black dark:hover:bg-grey-20">
              <FontAwesomeIcon icon={items.icon} className='text-lg'/>
            </button>
        ))
      }
    </div>
  </div>
  <div className='inline-block px-4 mb-2'>
      {props.data.thumbnails}
    </div>
  <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
    <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out" 
    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image" />
  </div>
  <div className="bg-white border-b rounded-b-xl pt-2 px-4 md:py-4 md:px-5">
    <div className='flex justify-between mb-2'>
      <div className='inline-block'>
        <FontAwesomeIcon icon={faThumbsUp} />
        <span className="inline-block text-gray-500 text-sm ml-2">{props.data.likes}</span>
      </div>
      <div className='inline-block'>
      <span className="text-gray-500 text-sm">{props.data.comments} Comments  {props.data.shares > 0 ? `${props.data.shares} shares` : ''}</span>
      </div>
    </div>
    <hr className="border-gray-300 my-auto"></hr>
    <div className='flex justify-around mt-1'>
      {
        icons[1].map((items)=>(
          <button className=" px-4 w-32 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 focus:outline-none active:bg-gray-300 focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " key={items.id}>
            <FontAwesomeIcon icon={items.icon} /> {items.text}
          </button>
        ))
      }
    </div>
  </div>
</div>
   </>
  )
}

export default Post