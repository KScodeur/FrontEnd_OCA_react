import React from 'react'
import Layout from '../components/Layout'

export default function APropos() {
  return (

      <div className='bg-[#FEF549] pb-20 sm:pb-10' id='a_propos'>
          <div className='lg:py-10 sm:py-2'>
          <h1 className='flex justify-center mt-6 mb-10 font-bold lg:text-3xl sm:text-2xl text-[#343a40]'>A propos</h1>
          </div>
          <div className='lg:flex sm:block sm:place-item-center sm:mx-auto md:justify-around lg:px-20'>
              <div className='lg:pl-5 px-20 sm:px-10 border-[#FEF549] '>
                  <img src="src/assets/images/accueil_1.JPG" alt="" className='border border-[#FEF549] rounded-lg'/>
              </div>
              <div className='lg:pr-20 place-items-center lg:pl-5 sm:px-10 px-20 sm:mt-5 lg:mt-0 text-justify lg:text-[1.4rem] sm:text-[1rem]'>
               <p> Mise en place en Juin 2017, OpenCode Academy est une école libre des WoeLabs visant à 
                préparer les jeunes adolescents (09 à 15 ans) au monde numérique.
                </p> 
                <p>Elle a été mise en place
                par WoeLab pour réduire la fracture numérique. Il s’agit d’une initiative purement intellectuelle, 
                qui se veut un complément éducatif pour les jeunes adolescents en leur fournissant un avant-goût du
                monde numérique.</p>
                À la rentrée nous demandons à l’enfant ce qu’il veut réaliser; et toute l’année on le stimule
                dans la concrétisation de ce projet... par des encouragements, des cours d’informatique, de
                programmation, de design , DIY, modélisation, électronique, prototypage et impression 3D. 
                <p>L’enfant est libre de changer d’envie au cours de l’année. On est libre de s’ennuyer, incité à
                aider les autres.
                Les cours théoriques et pratiques se tiennent aux WoeLabs chaque mercredi (15h-17h) et
                samedi (10h-12h).
                </p> 

              </div>
          </div>
      </div>

  )
}
