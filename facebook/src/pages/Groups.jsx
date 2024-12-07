import React from 'react'

const CustomSearchBar = () => {

  const [container, setContainer] = React.useState(false)

  const handleFocus = () => {setContainer(true)}
  const handleBlur = () => {setContainer(false)}

  return (
    <>
      <div className={`w-80 absolute flex justify-around pr-2 pt-2 pb-10 rounded-md ${container ? 'bg-white' : 'bg-transparent'}`}>
          <button className={`bg-gray-200 px-4 py-2 outline-none rounded-full inline-flex items-center justify-center text-md ${container ? 'opacity-100' : 'opacity-0'}`}>c</button>
          <input type="text" className='w-52 relative py-2 px-6 outline-none rounded-full bg-gray-300 text-gray-500' 
            placeholder='Search Groups' onFocus={handleFocus} onBlur={handleBlur} />
      </div>
    </>
  )
}

const Groups = () => {
  return (
    <>
      {/* <div className='relative grid grid-cols-[1fr,3fr] mt-14'>
        <div></div>
        <div></div>
      </div> */}

      <div className='mt-32 mx-52'>
      <CustomSearchBar />
      </div>
    </>
  )
}

export default Groups