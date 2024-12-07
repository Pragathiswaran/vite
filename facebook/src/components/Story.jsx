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
    "xs": 1,
    "lg": 5
  },
  "isDraggable": true
}' className="mt-2 relative">
  <div className="hs-carousel scrollbar scrollbar-hide scroll-smooth overflow-x-auto rounded-lg">
    <div className="relative h-52 -mx-1">
      <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 cursor-grab transition-transform duration-700 hs-carousel-dragging:transition-none hs-carousel-dragging:cursor-grabbing">
        <div className="hs-carousel-slide px-1 relative"> 
          <div className="flex flex-col w-full h-full rounded-x overflow-hidden relative">
            <img
              className="w-full h-full rounded-t-xl object-cover transform transition duration-500 ease-out hover:scale-110"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
            />
          <div className="absolute bottom-10 mx-10 z-20">
            <button type="button" className="mx-auto flex shrink-0 justify-center items-center gap-2 size-[38px] text-sm font-medium rounded-full border-3 border-white-0 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="p-4">
            <p className="mt-1 text-slate-950 font-semibold text-sm text-center">Create Story</p>
          </div>
        </div>
      </div>

        {
          Array.from({length:10}).map((_,index)=>(
              <div className="hs-carousel-slide px-1 rounded-xl relative" key={index}>
                <button type="button"
                    className="absolute flex shrink-0 justify-center items-center mt-2 ml-2 gap-2 size-[36px] text-sm font-medium rounded-full border-3 border-blue-500 bg-white text-blue-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none z-20">
                  <FontAwesomeIcon icon={faUser} />
                </button>
                <div className="flex flex-col w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    className="w-full h-full rounded-xl object-cover transform transition duration-500 ease-out hover:scale-110"
                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                  />
                </div>
                <div className="absolute bottom-4 mx-3 z-10">
                  <p className="mt-1 text-white font-semibold text-sm text-center">John Doe</p>
                </div>
              </div>
          ))}
      </div>
    </div>
  </div>
  <button type="button" className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center my-auto ml-1 size-10 rounded-full text-gray-800 hover:bg-white focus:outline-none focus:bg-gray-800/10">
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span className="sr-only">Previous</span>
  </button>
  <button type="button" className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center my-auto mr-1 size-10 text-gray-800 hover:bg-white focus:outline-none focus:bg-gray-800/10 rounded-full">
    <span className="sr-only">Next</span>
    <span className="text-2xl" aria-hidden="true">
      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>
</div> 
   </>
  );
};

export default Story;
