import React, { useState } from "react";


const Games = () => {
  
const SearchBar = () => {
  const [isParentVisible, setIsParentVisible] = useState(true);

  const handleFocus = () => {
    setIsParentVisible(false);
  };

  return (
    <div className="relative top-0">
      {isParentVisible && (
        <div className="flex justify-around py-2 rounded-md shadow-md w-full bg-white">
          <div>
            <button className="bg-gray-200 size-10 rounded-full inline-flex items-center justify-center">
              {`<-`}
            </button>
          </div>
          <div>
            {/* Placeholder for positioning */}
            <input
              className="w-60 bg-gray-200 outline-none py-2 px-4 rounded-full text-gray-500"
              placeholder="Search" 
              onFocus={handleFocus}
            />
          </div>
        </div>
      )}
      {/* Keep the input field in the same position */}
      {!isParentVisible && (
        <input
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-60 bg-gray-200 outline-none py-2 px-4 rounded-full text-gray-500"
          placeholder="Search"
          autoFocus
        />
      )}
    </div>
  );
};


  return (
    <>
      <div className='relative grid grid-cols-[1fr,3fr] mt-16'>
        <div className='mt-32 ml-20'>
            <SearchBar />
        </div>
        <div className=''>
          
        </div>
      </div>
    </>
  )
}

export default Games