import { Card } from "flowbite-react";
import { Link } from "react-router-dom";


const PremiumCards = ({item}) => {
  const { _id,bioId, name,biodata_type, profile_image, permanent_division, age, occupation} = item;


    
    return (
        <div>
                 
                
  
            

     
      <Card
  
>
  
<img src={profile_image} alt="Profile image" className="mx-auto w-11/12 h-[150px] object-cover " />
  <a href="#">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
{name.toUpperCase()}
    </h5>
  </a>
  <div className="mb-2  flex flex-col items-center "> 
    {/* <div className="flex items-center mb-1"> 
      <p className="mr-2">Biodata Id: {bioId} </p>
    
    </div> */}
    {/* <div className="flex items-center"> 
      <p className="mr-2">Gender: {biodata_type} </p>
    </div> */}
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
  <div className="flex items-center justify-center">
  <Link to={`/biodata/${_id}`}>
  <button
    className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
  >
    View Profile
  </button>
</Link>
  </div>
</Card>

       </div>
      
      
    );
};

export default PremiumCards;