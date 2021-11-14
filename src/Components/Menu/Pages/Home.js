import React from 'react';
import Cards from './Slider_Home/cards';
import Footer from './Slider_Home/footer';
import HeroSection from './Slider_Home/heroSection';

const Home = () => {
    return (
        <>
            <div className= 'Home'>
                <HeroSection />
            </div>
            <div>
            <Cards/>
            </div>
            <div>
            <Footer/>
            </div>
        </>
           
    );
}

export default Home;