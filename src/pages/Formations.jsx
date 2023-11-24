import React from 'react'
import Layout from '../components/Layout'

export default function Formations() {
  return (

        <div className='px-[250px] lg:px-[8rem] sm:px-[0px] md:pb-20  bg-[#FEF549]' id='formations'>
            <div className='lg:py-10 sm:py-2 '> <h1 className='flex  justify-center mt-6 mb-10 font-bold lg:text-3xl sm:text-2xl text-[#343a40]'>Nos Formations</h1>
            </div>
            <div className='grid lg:grid-cols-3 place-items-center lg:gap-[5rem] sm:gap-[2rem] sm:px-20 sm:grid sm:grid-cols-1'>
                <div className='border border-solid rounded-2xl border-[#fef549] md:w-[400px] px-8 py-10 bg-[#ffffff] sm:min-w-[270px]'>
                    <div className='w-[120px] h-[120px] 
                         md:mb-[22px] sm:mb-[10px]'>
                            <img src="/src/assets/images/infor.jpg" alt="" className='w-[120px] h-[120px] '/>

                    </div>
                    <span className='font-bold text-2xl sm:text-xl'>Initiation informatique</span>
                    <p className='flex justify-center mt-[22px]  sm:text-[15px] lg:text-[18px] text-justify'>
                    L'acquisition des fondamentaux de l'informatique offre à l'enfant une compréhension approfondie de l'ordinateur et de ses divers aspects, favorisant ainsi sa familiarisation avec cet outil essentiel.
                    </p>
                </div>
                <div className='border border-solid rounded-2xl border-[#fef549] md:w-[400px] px-8 py-10 bg-[#ffffff] sm:min-w-[270px]'>
                    <div className='w-[120px] h-[120px] rounded-full border
                        mb-[22px]'>
                            <img src="/src/assets/images/info.jpg" alt="" className='w-[120px] h-[120px] rounded-full'/>
                    </div>
                    <span className='font-bold text-2xl'>Programmation</span>
                    <p className='flex justify-center mt-[22px] lg:text-[18px] sm:text-[15px] text-justify'>
                    La programmation fondamentale offre à l'enfant une compréhension approfondie du langage informatique, stimulant la créativité algorithmique pour naviguer avec succès dans le monde numérique.
                    </p>
                </div>
                <div className='border border-solid rounded-2xl border-[#fef549] md:w-[400px] px-8 py-10 bg-[#ffffff] sm:min-w-[270px]'>
                    <div className='
                         mb-[22px]'>
                            <img src="/src/assets/images/arduino_1.png" alt="" className='w-[120px] h-[120px] '/>
                    </div>
                    <span className='font-bold text-2xl'>Electronique</span>
                    <p className='flex justify-center  mt-[22px] lg:text-[18px] sm:text-[15px] text-justify'>
                    Explorer les bases de l'électronique donne à l'enfant une compréhension approfondie du monde des circuits et des composants. Une initiation essentielle pour naviguer dans le paysage électronique.
                    </p>
                </div>
        
       
                <div className='border border-solid rounded-2xl border-[#fef549] md:w-[400px] px-8 py-10 bg-[#ffffff] sm:min-w-[270px]'>
                    <div className='w-[120px] h-[120px] rounded-full border
                         mb-[22px]'>
                            <img src="/src/assets/images/www.jpg" alt="" className='w-[120px] h-[120px] rounded-full'/>
                    </div>
                    <span className='font-bold text-2xl sm:text-xl'>Création de site internet</span>
                    <p className='text-justify flex justify-center mt-[22px] lg:text-[18px] sm:text-[15px]'>
                    Plonger dans la création de sites web permet à l'enfant de maîtriser le langage digital, libérant sa créativité pour construire des espaces en ligne uniques. Prêts à sculpter le futur digital avec confiance et inventivité.
                    </p>
                </div>
                <div className='border border-solid rounded-2xl border-[#fef549] md:w-[400px] px-8 py-10 bg-[#ffffff] sm:min-w-[270px]'>
                    <div className='w-[120px] h-[120px] rounded-full border
                         mb-[22px]'>
                            <img src="/src/assets/images/icons8-3d-96.png" alt=""  className='w-[120px] h-[120px]'/>

                    </div>
                    <span className='font-bold text-2xl'>Modelisation 3D</span>
                    <p className='text-justify flex justify-center mt-[22px] lg:text-[18px] sm:text-[15px]'>
                    La modélisation 3D offre à l'enfant une vision approfondie de la création virtuelle, explorant l'art de donner vie à des idées tridimensionnelles. Une compétence clé pour s'aventurer dans le monde numérique.
                    </p>
                </div>
                <div className=' w-[400px] px-8 py-10 sm:py-0'>
                    
                </div>
            </div>
        </div>

        
  )
}
