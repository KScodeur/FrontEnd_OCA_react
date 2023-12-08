import React from 'react'

export default function Footer() {
  return (
    <div className='relative' id='contact'>
        <div className='flex justify-between lg:px-20 sm:px-10 lg:py-10 sm:py-0'>
            <div className='pt-10 pb-10 sm:pb-5 '>
                <ul className='inline-block text-[#999]'>
                    <li className='mb-2 hover:text-black sm:text-sm lg:text-lg'> <a href="/">Accueil</a></li>
                    <li className='mb-2  hover:text-black sm:text-sm lg:text-lg'><a href="../#a_propos">A propos</a></li>
                    <li className='mb-2  hover:text-black sm:text-sm lg:text-lg'><a href="../#temoignages">Témoignages</a></li>
                    <li className='mb-2  hover:text-black sm:text-sm lg:text-lg'><a href="../#formations">Nos formations</a></li>
                    <li className='mb-2  hover:text-black sm:text-sm lg:text-lg'><a href="/eleves">Nos élèves</a></li>
                    
                </ul>
            </div>
            <div className='pt-10 pb-10 sm:pb-5'>
                <span className='font-medium lg:text-xl sm:text-sm'>Contactez-nous</span>
                <p className='flex justify-between mt-5 sm:w-[100px] md:w-[120px] lg:w-[150px]'>
                    <a href="https://www.facebook.com/woeacademyofficiel" target='_blank' ><img src="src/assets/images/facebook.png" alt="" className='lg:w-[25px] sm:w-[20px]'/></a>
                    <a href="https://www.instagram.com/opencodeacademy" target='_blank'><img src="src/assets/images/instagram.png" alt="" className='lg:w-[25px] sm:w-[20px]' /></a>
                    <a href="https://www.x.com/OpenCodeAcademy" target='_blank'><img src="src/assets/images/x.png" alt="" className='lg:w-[25px] sm:w-[20px]' /></a>
            
                </p>
                <div className='mt-6 text-[#999] sm:text-sm'>
                    <span>Mail: </span>
                <a href="mailto:woeacademy@lafricainedarchitecture.com">woeacademy@lafricainedarchitecture.com</a>
                </div>
                <div className='text-[#999] mt-2'>
                    <span>Tel: +228 93540826</span>
                </div>
            </div>
            <div className='pt-10 pb-10 sm:pb-5'>
            <a href="/"><img src="/src/assets/images/logo_oca.png" alt="" className='lg:w-[100px] sm:w-[50px] md:'/></a>
      
            </div>

            <div ></div>
        </div>
        <div className='bg-black text-white pl-20 lg:py-5 sm:py-2'>
            <span className='lg:text-xl sm:text-sm'>
            &copy; 2023 HubCity. All Rights Reserved
            </span>
        </div>
    </div>
  )
}
