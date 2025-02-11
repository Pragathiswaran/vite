import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className='w-72'>
            <input type="text" placeholder="Search..." 
            className='w-full border-2 rounded-md py-2 px-3'/>
        </div>
    </>
  )
}

export default SearchBar