import React from "react"
import "./App.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="max-h-[calc(100vh-10rem)] overflow-y-auto mt-24 mb-36 mx-6 md:mx-auto grid xl:grid-cols-3 
              lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center lg:gap-8 md:gap-6 sm:gap-y-4 gap-y-4 
              scrollbar-hide scroll-smooth"
        >
          {
            Array(12).fill(0).map((_, index) => (
              <Card key={index} />
            ))
          }
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
