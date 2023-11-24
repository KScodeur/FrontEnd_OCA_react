import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children, currentPage}) => {
    return(
        <div>
            <Navbar style={{position: currentPage === '/' ? 'absolute' : 'relative'}}/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;