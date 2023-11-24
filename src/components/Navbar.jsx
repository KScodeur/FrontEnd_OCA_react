import React, {useState, useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';   
import './Navbar.css';

export default function Navbar() {
  const [togglerNav, setToggleNav]= useState(true)
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const home = location.pathname === '/';
  const isMobile = window.innerWidth <= 1024

  const clickHandler = ()=>{
    if(isMobile){
    setToggleNav(!togglerNav)
  }
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  const navbarStyle = {
    position: scrollPosition === 0 && home ? 'absolute' : 'sticky',
    top: 0,
  };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`sticky top-0 bg-black bg-opacity-30 z-[14] ${home? 'opacity': 'relativeCss'} `}>
      <nav className={`md:flex md:px-20 sm:px-8 sm:py-3 md:h-20 lg:h-28 flex justify-between items-center w-[-moz-available] bg-black bg-opacity-30
     `}style={navbarStyle}>
        <div className=''>
          <a href="/">
            <img src="/src/assets/images/logo_oca.png" alt="" className="md:w-[50px] sm:w-[30px] lg:w-[100px]" />
          </a>
        </div>
        <ul className={togglerNav? 'flex space-x-20 sm:hidden lg:flex ' : 'sm:w-[80%] sm:pt-2  text-center bg-black bg-opacity-30 px-2 absolute top-[100%] navAnimate ease-out duration-100'}>
          
          <li ><a href="/" className="text-white md:text-lg sm:text-sm hover:text-[#FEF549]">
            Accueil
          </a></li>
          <li onClick={clickHandler} style={{ display: home ? '' : 'none' }}><a
            href="#a_propos"
            className={` text-white ${home ? '' : 'displayCss'} sm:text-sm md:text-lg  hover:text-[#FEF549] `}
          >
            A propos
          </a></li>
          <li onClick={clickHandler} style={{ display: home ? '' : 'none' }}><a
            href="#temoignages"
            className={`text-white ${home ? '' : 'displayCss'} md:text-lg sm:text-sm hover:text-[#FEF549]`}
          >
            Témoignages
          </a></li>
          <li onClick={clickHandler} style={{ display: home ? '' : 'none' }}><a
            href="#formations"
            className={`text-white ${home ? '' : 'displayCss'} md:text-lg sm:text-sm hover:text-[#FEF549]`}
          >
            Nos Formations
          </a></li>
          <li onClick={clickHandler} style={{ display: home ? '' : 'none' }}><a
            href="#contact"
            className={`text-white ${home ? '' : 'displayCss'} md:text-lg  sm:text-sm hover:text-[#FEF549]`}
          >
            Contact
          </a></li>
          <li onClick={clickHandler}><a href="/eleves" className="text-white md:text-lg sm:text-sm hover:text-[#FEF549]">
            Nos élèves
          </a></li>
        </ul>
        <buttonu  className='lg:hidden text-white' onClick={clickHandler}>
          {togglerNav ? <FaBars/> : <AiOutlineClose className='border font-bold'/>}
          </buttonu>
      </nav>
    </div>
  );
}

