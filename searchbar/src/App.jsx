import React from 'react'
import SearchBar from './component/SearchBar'
import Carousel from './component/Carousel'
import Draggable from './component/Draggable'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-20 w-full'>
      {/* <SearchBar /> */}
      <Draggable />
      {/* <Carousel/> */}
      </div>
    </>
  )
}

export default App