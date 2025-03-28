import React from 'react';
import bgImage from '../../../assets/banner-images/back.png'

const ContactUs = () => {
  return (



 <div 
            className="relative w-full   bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }} 
        >
          
            
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold p-12  mb-8">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          Have questions? We’re here to help. Reach out to us directly via phone or email.
        </p>
        <div className="p-8 rounded-lg  mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold  mb-2">Phone</h3>
            <p className="text-gray-700 text-lg">
              Call us at <span className="font-bold ">+1 (123) 456-7890</span>
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold  mb-2">Email</h3>
            <p className="text-gray-700 text-lg">
              Send us an email at <span className="font-bold ">support@loveforever.com</span>
            </p>
          </div>

        
        </div>
      </div>

        </div>







   
  );
};

export default ContactUs;
