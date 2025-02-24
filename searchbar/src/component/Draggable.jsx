import React, { useRef } from 'react'

const Draggable = () => {

    const list = Array.from({ length: 12 }, (_, i) => i + 1)

    const allowDrag = (e) => {
        e.preventDefault();
    }
    const drag = (e) => {
        e.dataTransfer.setData('text', e.target.id);
    }
    const Drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text');
        e.target.appendChild(document.getElementById(data));
    }
  return (
    <>
      <div className='flex gap-8'>
        <div className='w-60 h-40 border-2 border-white grid grid-cols-4 gap-2 content-center justify-items-center' onDrop={Drop} onDragOver={allowDrag}>
          {list.map((id) => (
            <div className='size-8 bg-green-500 inline-flex justify-center items-center' key={id} id={`drag-${id}`} draggable={true} onDragStart={drag}>{id}</div>
          ))}
        </div>
        <div id='drop' className='w-60 h-40 border-2 border-white grid grid-cols-4 gap-1 content-center justify-items-center' onDrop={Drop} onDragOver={allowDrag}></div>
      </div>
    </>
  )
}

export default Draggable