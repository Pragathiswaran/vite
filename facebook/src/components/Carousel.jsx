import React from 'react'

const Carousel = () => {
  return (
    <>
<div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
  "slidesQty": {
    "xs": 1,
    "lg": 3
  }
}' class="relative">
  <div class="hs-carousel w-full overflow-hidden bg-slate-200 rounded-lg">
    <div class="relative min-h-72 -mx-1">
  
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-blue-900 p-6">
            <span class="self-center text-sm text-gray-500 transition duration-700">First slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-blue-500 p-6">
            <span class="self-center text-sm text-gray-800 transition duration-700">Second slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-300 p-6">
            <span class="self-center text-sm text-gray-800 transition duration-700">Third slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-100 p-6">
            <span class="self-center text-sm text-gray-800 transition duration-700">Fourth slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-200 p-6">
            <span class="self-center text-sm text-gray-800 transition duration-700">Fifth slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-300 p-6">
            <span class="self-center text-sm text-gray-800 transition duration-700">Sixth slide</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
    <span class="text-2xl" aria-hidden="true">
      +
    </span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
    <span class="sr-only">Next</span>
    <span class="text-2xl" aria-hidden="true">
      -
    </span>
  </button>

  <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
</div>

    </>
  )
}

export default Carousel