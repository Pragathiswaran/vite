import React from 'react'

const Card = () => {
  return (
    <div className="sm:w-[400px] md:w-[360px] lg:w-[400px] h-48 bg-gray-600 rounded-lg p-4 shadow-2xl">
      <h1 className="text-xl font-semibold">Task Heading</h1>
      <div className="mt-2 overflow-hidden px-2 line-clamp-5">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quam illum id, delectus 
           quisquam blanditiis fugit soluta harum expedita commodi officiis quia optio! Omnis expedita, accusamus 
           numquam facere veritatis quidem!
        </p>
        <ul className='list-disc'>
          <li>My name is pragathiswaran and I'm from chennai</li>
        </ul>
      </div>
    </div>
  )
}

export default Card