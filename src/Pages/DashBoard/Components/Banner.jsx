 import Dish1 from "../../../assets/Dish1.png"
import Dish2 from "../../../assets/Dish2.png"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import { useState, useEffect } from "react";


const images = [
  Dish1,
  Dish2
]; 

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index); 
  };

  
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer); 
  }, [currentIndex]);

  return (
    <div className="relative w-full xl:h-130 md:h-70 h-36 mt-25  bg-[radial-gradient(circle_at_top_right,#472322_0%,#29142E_45%,#1a0e20_100%)] 
    overflow-hidden  ">
    
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="w-full h-full object-cover shrink-0" 
          />
        ))}
      </div>

    
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FaChevronRight size={20} />
      </button>

    
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;