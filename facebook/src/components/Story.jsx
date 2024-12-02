import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const Story = () => {

  return (
   <>
<div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 3,
    "lg": 4.5
  },
  "isDraggable": true
}' class="mt-2 relative">
  <div class="hs-carousel scrollbar scrollbar-hide scroll-smooth overflow-x-auto rounded-lg">
    <div class="relative h-60 -mx-1">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
      <div class="hs-carousel-slide px-1 bg-white-0 relative"> 

  <button type="button" class="absolute flex shrink-0 justify-center items-center mt-2 ml-2 gap-2 size-[44px] text-sm font-medium rounded-full border-3 border-blue-500 bg-white text-blue-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none z-20">
    <FontAwesomeIcon icon={faUser} />
  </button>

  <div className="flex flex-col w-full h-60 rounded-x overflow-hidden relative">
    <img
      className="w-full h-4/5 rounded-t-xl object-cover transform transition duration-500 ease-out hover:scale-110"
      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
    />
    
    <div className="absolute bottom-10 mx-11 z-20">
      <button type="button" class="mx-auto flex shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-medium rounded-full border-3 border-white-0 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
    
    <div className="p-4">
      <p className="mt-1 text-slate-950 font-semibold text-center">Create Story</p>
    </div>
  </div>
      </div>

        {
          Array.from({length:10}).map((_,index)=>(
            <>
                <div className="hs-carousel-slide px-1 rounded-xl relative" key={index}>
  <button
    type="button"
    className="absolute flex shrink-0 justify-center items-center mt-2 ml-2 gap-2 size-[44px] text-sm font-medium rounded-full border-3 border-blue-500 bg-white text-blue-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none z-20"
  >
    <FontAwesomeIcon icon={faUser} />
  </button>

  <div className="flex flex-col w-full h-60 rounded-xl overflow-hidden relative">
    <img
      className="w-full h-full rounded-t-xl object-cover transform transition duration-500 ease-out hover:scale-110"
      src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
    />
  </div>

  <div className="absolute bottom-4 mx-3 z-10">
    <p className="mt-1 text-white font-semibold text-center">John Doe</p>
  </div>
</div>

            </>
          ))
        }
      </div>
    </div>
  </div>

  <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
    <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
    <span class="sr-only">Next</span>
    <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>
</div> 
   </>
  );
};

export default Story;
