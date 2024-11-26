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
        <div class="flex flex-col bg-white shadow-xl border rounded-xl p-4 md:p-5 dark:text-neutral-400">
            <div className='flex items-center justify-around pb-2 border-b-2'>
                <FontAwesomeIcon icon={faUser} className='text-4xl'/>
                <div class="w-5/6 space-y-3">
                    <input type="text" class="py-3 px-4 block w-full rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-200 dark:text-slate-900 dark:placeholder-neutral-600 focus:outline-none" placeholder="What's is on your Mind?" />
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
    </>
  )
}

export default CreatePost