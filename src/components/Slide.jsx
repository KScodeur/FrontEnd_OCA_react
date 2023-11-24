import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const Slider = ({children : images, autoSlide= false, autoSlideInterval=3000}) => {
  
  const [currentImage, setCurrentImage] = useState(0);



  const handlePrevSlide = () => setCurrentImage((currentImage) => (currentImage === 0 ? images.length -1 : currentImage - 1));

  const handleNextSlide = () => setCurrentImage((currentImage) => (currentImage === images.length-1 ? 0 : currentImage+1));
  
  useEffect(() => {
    if(!autoSlide) return
    const interval = setInterval(handleNextSlide, autoSlideInterval)
    return () => 
      clearInterval(interval)
    
  }, []);

  return (
    <div>
        <div className="relative lg:h-[950px]  overflow-hidden">
            
            <div className={`flex duration-1000 transition-transform ease-out`
              } style={{transform: `translateX(-${currentImage*100}%)`}}
            >
              {images}
            </div>
              <button onClick={handlePrevSlide} type='button' className=' z-[12] absolute top-[50%] left-[2%]'>
                <img src="/src/assets/images/prev_chevron.png" alt=""  className='lg:w-[70px] sm:w-[25px] md:w-[50px]' />
              </button>
              <button onClick={handleNextSlide} type='button' className='z-11 absolute top-[50%] right-[2%]'><img src="/src/assets/images/next_chevron.png" alt=""  className='md:w-[50px] sm:w-[25px] lg:w-[70px]'/></button>
      
            <div className='absolute top-[45%] left-[14%] z-11 mx-auto'>
              <p className='text-white md:text-[1.5rem] md:t lg:text-[4.5rem] sm:text-[0.95rem] font-bold  mx-auto shadow-lg'>OPEN CODE ACADEMY ONLY FOR KIDS</p>
              <button className=' bg-[#FEF549] md:text-xl rounded-lg lg:px-6 md:px-3 md:py-2 sm:px-1 sm:py-1 sm:text-sm mt-1  mx-auto'>
                <a href="">Inscription</a>
              </button>
            </div>
            </div>
            

    
    </div>
  );
};

export default Slider;
