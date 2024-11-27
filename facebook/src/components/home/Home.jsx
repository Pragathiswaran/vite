import React from 'react'
import CreatePost from './CreatePost'
import Story from './Story'
import Carousel from './../Carousel'
const Home = () => {
  return (
    <>
        <div className="grid grid-cols-[1fr,600px,1fr] gap-1 mt-5">
  {/* Column 1: Navbar 1 */}
  <div className="flex flex-col items-center justify-start w-2/3">
    <p>Navbar 1</p>
  </div>

  {/* Column 2: Main Content */}
  <div className="flex flex-col overflow-x-hidden max-w-full">
    <CreatePost />
    <Story />
    {/* <Carousel/> */}
  </div>

  {/* Column 3: Navbar 2 */}
  <div className="flex flex-col items-center justify-start w-2/3">
    <p>Navbar 2</p>
  </div>
</div>

    </>
  )
}

export default Home