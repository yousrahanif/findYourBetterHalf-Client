import { Card } from "flowbite-react";
import { Rating } from "flowbite-react";

const SuccessStoryCards = ({item}) => {
    const {_id, successId, coupleImage, marriageDate, reviewStars , storyText}
=item;


    return (
        <div>
                 
    
            

     
        <Card
    
  >
    <img src={coupleImage} alt="Profile image" className="w-full h-[220px] object-cover" />

    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
Marriage Date: {marriageDate}
      </h5>
    </a>
    <div className="mb-2 mt-2.5 flex flex-col items-start"> 
    <div className="flex items-center mb-1"> 
            <p className="mr-2">Rating: </p>
            <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{reviewStars} out of 5</p>
    </Rating>
          </div>
      <div className="flex items-center"> 
        <p className="mr-2">Success Story: {storyText} </p>
      </div>
    
    </div>
    <div className="flex items-center justify-center">
    
    </div>
  </Card>
  
         </div>
    );
};

export default SuccessStoryCards;