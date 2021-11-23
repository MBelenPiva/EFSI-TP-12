import React from 'react'; 
import Navbar from './Navbar';
import TitleShopBox from './TitleShopBox';
import Shop from './Shop';
import InstagramBox from './InstagramBox';
import Footer from './Footer';

const GoToShop = () => {
    
    return(
        <>
         <Navbar></Navbar>
        <TitleShopBox></TitleShopBox>
        <Shop></Shop>
        <Footer></Footer>

        </>
    );
}

export default GoToShop;

