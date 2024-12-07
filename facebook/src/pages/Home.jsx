import React from 'react'
import CreatePost from '../components/CreatePost'
import Story from '../components/Story'
import Post from '../components/Post'
import NavbarLeft from '../components/NavbarLeft'
import Contact from '../components/Contact'

const Home = () => {
  const PostData = [
    {
      id:1,
      username:'Pragathiswaran M',
      thumbnails:'This is my first post',
      time:'2h',
      likes: 10,
      comments: 5,
      shares: 0
    },
    {
      id:2,
      username:'Meena',
      thumbnails:'',
      time:'28 November 15:28',
      likes: 1,
      comments: 5,
      shares: 2
    },
    {
      id:3,
      username:'Meena',
      thumbnails:'',
      time:'28 November 15:28',
      likes: 1,
      comments: 5,
      shares: 2
    },
  ]
  return (
    <>
      <div className="grid grid-cols-[1fr,600px,1fr] gap-1 mt-6">
        <div className="mt-12 fixed left-0 top-0">
          <NavbarLeft />
        </div>
        <div className="max-w-full mt-12 overflow-hidden hover:overflow-auto" style={{ gridColumn: '2 / 3' }}>
          <CreatePost />
          <Story />
          {/* <TooltipExample /> */}
          {PostData.map((data) => ( <Post key={data.id} data={data} />))}
        </div>
        <div className="mt-12 mr-2 fixed right-0 top-0">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home