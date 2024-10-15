import React from "react"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
    <header className="fixed top-0 w-full">
      <nav className="py-4 bg-blue-500 text-center mb-20">
        <span className="text-white text-3xl">TODO LIST</span>
      </nav>
    </header>
    <main className="mt-28">
      <section className="flex flex-wrap justify-around px-10 py-5">
        <div className="flex justify-center w-1/4 h-40 border border-black m-3">
          
        </div>
        <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
        </div>
        <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
          <div className="flex justify-center w-1/4 h-32 border border-black m-3">
          
          </div>
        
      </section>
    </main>
   <footer className="fixed w-full bottom-0">
      <div className="menu__border"></div>
      <nav className="bg-blue-500 text-white w-full h-16 flex justify-center">
        <button className="relative bottom-16 bg-white text-gray-950 text-2xl w-28 h-28 rounded-full ">
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </nav>
   </footer>
    </>
  )
}

export default App
