import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faEllipsis, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='w-[330px] pb-12 h-screen overflow-y-hidden scrollbar-smooth scrollbar-thumb-rounded-lg scrollbar-hide scrollbar-thumb-gray-400 scrollbar-track-none hover:overflow-y-auto hover:scrollbar-thin'>
      <div className='py-6 flex flex-col border-b-2 border-gray-300'>
        <span className='text-gray-500 font-semibold text-lg my-3'>Birthday</span>
          <span className='text-gray-700 inline-block ml-1'>
            <FontAwesomeIcon icon={faGift} className='text-2xl mr-3'/>
            <span className='text-black font-semibold'>Rohan's</span> birthday is today
          </span>
      </div>
      <nav className='flex flex-col justify-start ml-2 py-3 border-b-2 border-gray-300'>
        <div className='flex justify-between'>
          <div className='text-gray-500 font-semibold text-lg'>
            Contacts 
          </div>
          <div className='w-16 inline-flex justify-between text-gray-500'>
            { [faMagnifyingGlass, faEllipsis].map((icon, index) => (<><FontAwesomeIcon icon={icon} className='text-md' key={index}/> </>))}
          </div>
        </div>
        <ul className='mt-4'>
          {Array.from({length: 10}).map((_, index) => (
            <>
              <div className='inline-block hover:bg-gray-200 p-2 w-full rounded-l-lg' key={index}>
                <div class="relative inline-block">
                  <img class="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
                  {false && <span class="absolute bottom-0 end-0 block size-2.5 rounded-full ring-2 ring-white bg-green-400"></span>}
                </div>                
                <span className='text-black font-semibold ml-2'>Rohan</span>
              </div>
            </>
          ))}
        </ul>
      </nav>
      <div className='flex flex-col py-3 '>
          <span className='text-gray-500 font-semibold text-lg mx-1 mb-3'>Group Chart</span>
          <div className='inline-flex w-full p-2 hover:bg-gray-200 rounded-l-lg'>
            <button type="button" class="py-4 px-4 inline-flex size-9 items-center justify-center gap-x-2 text-lg font-medium rounded-full border border-transparent text-gray-500 bg-gray-300 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className='inline-block my-auto mx-3'>Create Group Chat</div>
          </div>
        </div>
    </div>
  )
}

export default Contact