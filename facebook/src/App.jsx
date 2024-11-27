import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import Carousel from './components/Carousel'

const App = () => {

  return (
    <>
      {/* <Navbar />
      <Home /> */}
      <div className="w-full bg-white rounded-lg shadow-md">
  <div className="px-4">
    <nav className="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
      <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active" id="basic-tabs-item-1" aria-selected="true" data-hs-tab="#basic-tabs-1" aria-controls="basic-tabs-1" role="tab">
        Tab 1
      </button>
      <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="basic-tabs-item-2" aria-selected="false" data-hs-tab="#basic-tabs-2" aria-controls="basic-tabs-2" role="tab">
        Tab 2
      </button>
      <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="basic-tabs-item-3" aria-selected="false" data-hs-tab="#basic-tabs-3" aria-controls="basic-tabs-3" role="tab">
        Tab 3
      </button>
    </nav>
  </div>

  <div >
    <div id="basic-tabs-1" className="hidden" role="tabpanel" ></div>
    <div id="basic-tabs-2" className="hidden" role="tabpanel" ></div>
    <div id="basic-tabs-3" className="hidden" role="tabpanel" ></div>
  </div>
</div>
    </>
  )
}

export default App