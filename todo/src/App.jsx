import React from "react"
import "./App.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <div className="mt-24 mx-20 flex flex-wrap gap-6 ">
      <Card />
      </div>
      <Footer />
    </>
  )
}

export default App
