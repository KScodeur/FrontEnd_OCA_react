import React from 'react'
import Layout from '../components/Layout'

export default function Temoignages() {
  return (

      <div className='md:px-20 md:pb-20 sm:place-items-center' id='temoignages'>
        <div className='lg:py-10 sm:py-2'>
          <h1 className='flex justify-center mt-6 mb-10 font-bold lg:text-5xl sm:text-2xl text-[#343a40]'>Témoignages</h1>
        </div>
        <div className='lg:flex md:justify-around sm:mx-auto'>
              <div className='border border-solid rounded-[1.5rem] w-[400px] sm:w-[270px] md:w-[400px] px-8 py-10 shadow-xl sm:mb-20 sm:mx-auto'>
                      <div className='w-[120px] h-[120px] rounded-full 
                      flex justify-center items-center mx-auto mb-[22px]'>
                          <img src="/src/assets/images/test/wade.jpg" alt="" className='w-[120px] h-[120px] rounded-full '/>
                      </div>
                      <span className='flex justify-center font-bold'>OWA Wade</span>
                      <p className='flex justify-center mt-[22px] text-center text-[18px] sm:text-[15px]'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate officia harum, autem odio corrupti voluptatibus sit reiciendis voluptas ab similique magnam sequi itaque facilis dignissimos architecto dolorum ex, deleniti in?
                  
                      </p>
              </div> 
              <div className='border border-solid rounded-[1.5rem] w-[400px] md:w-[400px] px-8 py-10 shadow-xl sm:mb-20 sm:mx-auto sm:w-[270px]'>
                      <div className='w-[120px] h-[120px] rounded-full 
                      flex justify-center items-center mx-auto mb-[22px]'>
                          <img src="/src/assets/images/test/caleb.jpg" alt="" className='w-[120px] h-[120px] rounded-full '/>
                      </div>
                      <span className='flex justify-center font-bold'>Ko</span>
                      <p className='flex justify-center mt-[22px] text-center text-[18px] sm:text-[15px]'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate officia harum, autem odio corrupti voluptatibus sit reiciendis voluptas ab similique magnam sequi itaque facilis dignissimos architecto dolorum ex, deleniti in?
                  
                      </p>
              </div>
              <div className='border border-solid rounded-[1.5rem] w-[400px] md:w-[400px] px-8 py-10 shadow-xl sm:mb-20 sm:mx-auto sm:w-[270px]'>
                      <div className='w-[120px] h-[120px] rounded-full 
                      flex justify-center items-center mx-auto mb-[22px]'>
                          <img src="/src/assets/images/test/anne.jpg" alt="" className='w-[120px] h-[120px] rounded-full '/>
                      </div>
                      <span className='flex justify-center font-bold'>Ko</span>
                      <p className='flex justify-center mt-[22px] text-center text-[18px] sm:text-[15px]'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate officia harum, autem odio corrupti voluptatibus sit reiciendis voluptas ab similique magnam sequi itaque facilis dignissimos architecto dolorum ex, deleniti in?
                  
                      </p>
              </div>
        </div>
      </div>

  )
}
