import image3 from '../../assets/banner-images/image3.jpg'
import image5 from '../../assets/banner-images/image5.jpg'
import image6 from '../../assets/banner-images/image6.jpg'
import image8 from '../../assets/banner-images/image8.jpg'
import image9 from '../../assets/banner-images/image9.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../../components/SectionTitle/SectionTitle'




const Banner = () => {

    return (
        <div>
            
              <Carousel className='w-1/3 mx-auto'>
             <div>
        <img src={image6} />
        </div>
        <div>
            <img src={image5} />
        </div>
        <div>
        <img src={image9} />
        </div>
       
        <div>
        <img src={image3} />
        </div>
        <div>
        <img src={image8} />
        </div>
       
       
    </Carousel>
        </div>
      
    );
};

export default Banner;