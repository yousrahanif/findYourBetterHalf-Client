import React from 'react';
import { Card, Button } from 'flowbite-react';
import logo from '../../../../src/assets/how-works/many.webp'


const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
      
        <div className="flex justify-center mb-8">
          <Card imgSrc={logo} className="w-96">
            <h5 className="text-2xl font-semibold text-gray-800">Welcome to LoveForever</h5>
            <p className="text-gray-600 mt-4">
              LoveForever is a unique matrimony platform designed to connect like-minded individuals seeking
              genuine relationships. Our app provides a safe space for people to find their perfect match with
              a focus on compatibility, love, and long-term commitment.
            </p>
           
          </Card>
        </div>
       
      </div>
    </section>
  );
};

export default AboutUs;
