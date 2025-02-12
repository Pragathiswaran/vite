import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://place-hold.it/300x200/666?text=Slide+1",
    "https://place-hold.it/300x200/666/fff?text=Slide+2",
    "https://place-hold.it/300x200/101010/fff?text=Slide+3",
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-72">
      <img src={images[current]} alt="Slide" className="w-full rounded" />
      <button onClick={prevSlide} className="absolute left-0 top-1/2 bg-gray-500 text-white px-2">❮</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 bg-gray-500 text-white px-2">❯</button>
    </div>
  );
};

export default Carousel;
