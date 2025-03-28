import React from 'react';
import { Card, Button } from 'flowbite-react';

import bgImage from '../../../assets/banner-images/back.png'

const AboutUs = () => {
  return (


 <div 
            className="relative w-full   bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }} 
        >
           <div className="container mx-auto text-center ">
        
        <div className="p-12 rounded-lg  mx-auto">
        

        

        
        </div>
      </div>
  
      <div className="container mx-auto text-center">
      
        <div className="flex justify-center mb-8 p-20">
          <div  className="w-96">

            <p className="text-gray-600 text-xl font-light">
              LoveForever is a unique matrimony platform designed to connect like-minded individuals seeking
              genuine relationships. Our app provides a safe space for people to find their perfect match with
              a focus on compatibility, love, and long-term commitment.
            </p>
           
          </div>
        </div>
       
      </div>
   

        </div>



   
  );
};

export default AboutUs;
