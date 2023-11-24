import React from 'react';
import Slider from '../components/Slide';
import GalleryHome from '../components/GalleryHome';
import APropos from './APropos';
import Temoignages from './Temoignages';
import Formations from './Formations';
import Layout from '../components/Layout';
import Images from '../components/Images';

export default function Home() {
  const images = [ 
    "src/assets/images/accueil_2.jpeg",
    "src/assets/images/accueil_1.JPG",
    ];
  
  return (
    <Layout>
        <Slider autoSlide={true} autoSlideInterval={10000}>
          {images.map((image) => (<img src={image} />))}
        </Slider>
        <GalleryHome autoSlide={true} autoSlideInterval={3000}>
        {Images.map((gallerie, index) => (
                        <img
                        key={index}
                          src={gallerie} className='sm:w-[150px] md:w-[200px] lg:w-[300px]'
                        />
                      ))}
        </GalleryHome>
        <Formations/>
        <Temoignages/>

        <APropos/>
       
    </Layout>
  )
}
