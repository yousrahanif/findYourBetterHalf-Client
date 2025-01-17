import React from 'react';
import Banner from './Banner';
import PremiumCards from './PremiumCards';
import PremiumData from './PremiumData';
import HowWorks from './HowWorks';
import CounterSection from './CounterSection';
import SuccessStory from './SuccessStory';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
               <Helmet>
            
                            <title>LoveForever || Home</title>
                        </Helmet>
         <Banner></Banner>
        <PremiumData></PremiumData>
        <HowWorks></HowWorks>
        <CounterSection></CounterSection>
        <SuccessStory></SuccessStory>
         
        </div>
    );
};

export default Home;