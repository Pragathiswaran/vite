import React, { useEffect, useState } from "react";

const Carousel = ({ autoSlide = false, autoSlideIntervelTime = 1000}) => {
  const images = [
    "https://place-hold.it/300x200/666?text=Slide+1",
    "https://place-hold.it/300x200/676/fff?text=Slide+2",
    "https://place-hold.it/300x200/5560/fff?text=Slide+3",
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if(!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideIntervelTime);
    return () => clearInterval(interval);
  },[])
  return (
    <>
      <div className="w-72 relative overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => ( <img key={index} src={image} alt={`Slide ${index + 1}`}/> ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <button onClick={prevSlide} className="bg-white inline-flex justify-center items-center px-1">{`<`}</button>
          <button onClick={nextSlide} className="bg-white inline-flex justify-center items-center px-1">{`>`}</button>
        </div>
        <div className="absolute bottom-1 right-0 left-0">
          <div className="flex justify-center items-center gap-2">
            {images.map((_, index) => (
              <button key={index}
                className={`transition-all size-2 rounded-full bg-gray-100 ${index === current ? "p-[6px]" : 'opacity-50' }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
