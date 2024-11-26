import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Home from './components/home/Home'
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel slides
  const slides = [
    { id: 1, content: "First slide", bgColor: "bg-gray-100" },
    { id: 2, content: "Second slide", bgColor: "bg-gray-200" },
    { id: 3, content: "Third slide", bgColor: "bg-gray-300" },
    { id: 4, content: "Fourth slide", bgColor: "bg-gray-100" },
    { id: 5, content: "Fifth slide", bgColor: "bg-gray-200" },
    { id: 6, content: "Sixth slide", bgColor: "bg-gray-300" },
  ];

  const totalSlides = slides.length;

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Navbar />
      <Home />
 
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-64 flex justify-center items-center ${slide.bgColor}`}
          >
            <span className="text-lg font-semibold">{slide.content}</span>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute inset-y-0 left-0 flex items-center justify-center w-10 h-full text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-l-lg focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-r-lg focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l7-7-7-7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App