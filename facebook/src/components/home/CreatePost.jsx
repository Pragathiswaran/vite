import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faImage, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const CreatePost = () => {
    const icons = [
        {icon: faVideo, text: 'Live Video', color: 'text-red-500'},
        {icon: faImage, text: 'Photos/Videos',color: 'text-green-500'},
        {icon: faFaceSmile, text: 'Activity/Feeling',color: 'text-yellow-500'},
    ]
  return (
    <>
        <div class="flex flex-col bg-white border rounded-xl p-4 md:p-5 dark:text-neutral-400">
            <div className='flex items-center justify-around pb-2 border-b-2'>
                <FontAwesomeIcon icon={faUser} className='text-4xl'/>
                <div class="w-5/6 space-y-3">
                    <input type="text" class="py-3 px-4 block w-full rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-200 dark:text-slate-900 dark:placeholder-neutral-600 focus:outline-none" 
                    placeholder="What's is on your Mind?" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal"/>
                </div>
            </div>
            <div className='mt-2 flex justify-around'>
                {
                    icons.map((items,index)=>(
                        <button type="button" className="w-44 h-12 py-2 px-4 text-mg font-medium rounded-lg border border-transparent text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
                          key={index}>
                          <FontAwesomeIcon icon={items.icon} className={`${items.color}`}/> {items.text}
                        </button>
                    ))
                }
            </div>
        </div>
<div id="hs-scale-animation-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
  <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
    <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
      <div class="flex justify-between items-center py-3 px-4 border-b">
        <h3 id="hs-scale-animation-modal-label" class="font-bold text-xl text-gray-800">
          Create Post
        </h3>
        <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <p class="mt-1 text-gray-800">
          This is a wider card with supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-scale-animation-modal">
          Close
        </button>
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CreatePost