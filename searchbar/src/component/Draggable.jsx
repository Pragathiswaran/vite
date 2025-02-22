import React from 'react'

const Draggable = () => {

    const list =[ 'list\n1', 'list\n2', 'list\n3', 'list\n4', 'list\n5', 'list\n6', 'list\n7', 'list\n8', 'list\n9']

    
    const OnDragHandler = (e) => {}
    const OnDropdHandler = (e) => {}
    const OnDragOverHandler = (e) => {
        e.preventDefault();
    }
  return (
    <>
      <div className='flex justify-center items-center gap-10'>
        <div className='border-2 w-72 h-96 p-2 gap-2 flex flex-col'>
            {list.map((item, index) => (
                <div key={index} className='w-full bg-blue-200 px-2 py-1'>{item}</div>
            ))}
        </div>
        <div className='border-2 w-72 h-96 p-2 gap-2 flex flex-col'></div>
      </div>
    </>
  )
}

export default Draggable