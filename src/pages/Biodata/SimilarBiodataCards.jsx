import { Card } from 'flowbite-react';
import React from 'react';

const SimilarBiodataCards = ({item}) => {
    
        const { _id,bioId,name, biodata_type, profile_image, permanent_division, age, occupation } = item;
    
        return (
            <div> 
                   <Card
              
             >
        <img src={profile_image} alt="Profile image" className="w-full h-[220px] object-cover" />
      
        <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
    {name.toUpperCase()}
        </h5>
      </a>
      <div className="mb-2 mt-2.5 flex flex-col items-center "> 
        <div className="flex items-center mb-1"> 
          <p className="mr-2">Biodata Id: {bioId} </p>
        
        </div>
        <div className="flex items-center"> 
          <p className="mr-2">Gender: {biodata_type} </p>
        </div>
        <div className="flex items-center"> 
          <p className="mr-2">Age: {age} </p>
        </div>
        <div className="flex items-center"> 
          <p className="mr-2">Occupation: {occupation} </p>
        </div>
        <div className="flex items-center"> 
          <p className="mr-2">Permanent Division: {permanent_division} </p>
        </div>
        </div>
            
             </Card>
             
                    </div>
        );
    
};

export default SimilarBiodataCards;