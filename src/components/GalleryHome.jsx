import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';  

const GalleryHome =({children : images, autoSlide= false, autoSlideInterval=3000}) => {
  
  
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseMove = (e) => {
      setCurrentImage(e.nativeEvent.offsetX);
    };
    const handlePrevSlide = () => setCurrentImage((currentImage) => (currentImage === 0 ? images.length -1 : currentImage - 1));
  
    const handleNextSlide = () => setCurrentImage((currentImage) => (currentImage === images.length-18 ? 0 : currentImage+1));
    
    
  
    useEffect(() => {
      if(!autoSlide) return
      const interval = setInterval(handleNextSlide, autoSlideInterval)
      return () => 
        clearInterval(interval)
      
    }, []);
  

  return (
   
        <div className="relative  bg-[#FEF549] overflow-hidden">
            
            <div className={`flex duration-1000 transition-transform ease-out`
              } style={{transform: `translateX(-${currentImage * (100 / 5)}%)`}}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {images}
            </div>
            </div>)}

            
export default GalleryHome
