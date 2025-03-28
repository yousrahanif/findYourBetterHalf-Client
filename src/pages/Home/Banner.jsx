// import image3 from '../../assets/banner-images/image3.jpg'
// import image5 from '../../assets/banner-images/image5.jpg'

// import image9 from '../../assets/banner-images/image9.jpg'
// import outdoor from '../../assets/banner-images/Outdoor-couples-photos-12.jpg'
// import image11 from '../../assets/banner-images/couple111.jpg'

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';




// const Banner = () => {

//     return (
//         <div>
            
//               <Carousel className='w-1/3 mx-auto'>
//              <div>
//         <img src={outdoor} />
//         </div>
//         <div>
//             <img src={image5} />
//         </div>
//         <div>
//         <img src={image9} />
//         </div>
       
//         <div>
//         <img src={image3} />
//         </div>
//         <div>
//         <img src={image11} />
//         </div>
       
       
//     </Carousel>
//         </div>
      
//     );
// };

// export default Banner;



import image3 from '../../assets/banner-images/image3.jpg'
import image5 from '../../assets/banner-images/image5.jpg'
import image9 from '../../assets/banner-images/image9.jpg'
import outdoor from '../../assets/banner-images/Outdoor-couples-photos-12.jpg'
import image11 from '../../assets/banner-images/couple111.jpg'
import bgImage from '../../assets/banner-images/back.png'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div 
            className="relative w-full  bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }} 
        >
            <div className="absolute inset-0 "></div> 
            
            <div className="relative z-10">
                <Carousel className='w-1/3 mx-auto'>
                    <div>
                        <img src={outdoor} alt="Outdoor" />
                    </div>
                    <div>
                        <img src={image5} alt="Image 5" />
                    </div>
                    <div>
                        <img src={image9} alt="Image 9" />
                    </div>
                    <div>
                        <img src={image3} alt="Image 3" />
                    </div>
                    <div>
                        <img src={image11} alt="Image 11" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;
