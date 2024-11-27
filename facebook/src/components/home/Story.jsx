import React, { useRef, useState, useEffect } from "react";

const Story = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    // Calculate total slides on mount
    const slides = carouselRef.current.querySelectorAll(".hs-carousel-slide");
    setTotalSlides(slides.length);
  }, []);

  const goToSlide = (index) => {
    const carouselBody = carouselRef.current.querySelector(".hs-carousel-body");
    const slideWidth =
      carouselRef.current.querySelector(".hs-carousel-slide").offsetWidth + 8; // Adjust for gap

    // Constrain index to valid range
    const newIndex = Math.max(0, Math.min(index, totalSlides - 1));
    setCurrentIndex(newIndex);
    carouselBody.style.transform = `translateX(-${newIndex * slideWidth}px)`;
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      goToSlide(currentIndex + 1);
    }
  };

  return (
    <div
      className="relative mt-3"
      ref={carouselRef}
    >
      <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
        <div className="relative min-h-72 -mx-1">
          <div className="hs-carousel-body flex transition-transform duration-700">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                className="hs-carousel-slide snap-center px-2"
                key={`slide-${index}`}
              >
                <div className="flex flex-col w-32 h-60 shadow-xl rounded-xl bg-white dark:bg-gray-800">
                  <img
                    className="w-full h-4/5 rounded-t-xl"
                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                    alt={`Slide ${index + 1}`}
                  />
                  <div className="p-4">
                    <p className="mt-1 text-slate-950 text-center">create</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        className={`hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
          currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handlePrev}
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>

      {/* Next Button */}
      <button
        type="button"
        className={`hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
          currentIndex === totalSlides - 1 ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={handleNext}
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Story;
