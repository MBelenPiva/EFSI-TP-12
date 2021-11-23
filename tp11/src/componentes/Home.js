import React from 'react'; 
import Navbar from './Navbar';
import SlideShop from './SlideShop';
import ProductsBox from './ProductsBox';
import InstagramBox from './InstagramBox';
import Footer from './Footer';

const Home = () => {
    
    return(
        <>

        <section className="Home">
        <Navbar></Navbar>
        <SlideShop></SlideShop>
        <ProductsBox></ProductsBox>
        <Footer></Footer>
        </section>
        
      </>
    );
}

export default Home;

