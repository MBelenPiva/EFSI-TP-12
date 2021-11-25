import React from 'react'; 
import Navbar from './Navbar';
import SlideShop from './SlideShop';
import ProductsBox from './ProductsBox';
import InstagramBox from './InstagramBox';
import Footer from './Footer';
import AboutBox from './AboutBox';

const Home = () => {
    
    return(
        <>

        <section className="Home">
        <Navbar></Navbar>
        <SlideShop></SlideShop>
        <ProductsBox></ProductsBox>
        <AboutBox></AboutBox>
        <Footer></Footer>
        </section>
        
      </>
    );
}

export default Home;

