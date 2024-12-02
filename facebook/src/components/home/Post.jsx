import React from 'react'

const Post = () => {
  return (
   <>

<a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition mt-2" href="#">
<div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
    <p class="mt-1 text-sm text-gray-500">
      Featured
    </p>
  </div>
  <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
    <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out" 
    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Card Image" />
  </div>
  <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
    <p class="mt-1 text-sm text-gray-500">
      Featured
    </p>
  </div>
</a>
   </>
  )
}

export default Post