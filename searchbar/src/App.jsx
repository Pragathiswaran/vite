import React from 'react'
import SearchBar from './component/SearchBar'
import Carousel from './component/Carousel'
import Draggable from './component/Draggable'
import PhoneOtp from './component/PhoneOtp'
import ProgressBar from './component/ProgressBar'
import DraggableList from './component/DraggableList'

const App = () => {
  return (
    <>
      <div className='flex justify-center items-center mt-20 w-full'>
      {/* <SearchBar /> */}
      {/* <Draggable /> */}
      {/* <Carousel/> */}
      {/* <PhoneOtp /> */}
      {/* <ProgressBar /> */}
      <DraggableList />
      </div>
    </>
  )
}

export default App