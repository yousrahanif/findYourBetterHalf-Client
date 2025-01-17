import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SuccessStoryCards from './SuccessStoryCards';

const SuccessStory = () => {
      const [success, setSuccess]=useState([])
        useEffect(()=>{
            fetch("http://localhost:5000/success")
            .then(res=>res.json())
            .then(data=>{
                // const successData=data.filter(item=>item.Member_Type==="Premium")
                setSuccess(data)
            })
        },[])
    return (
        <section>
          <SectionTitle
            heading={"Success Story"}
            ></SectionTitle>


<div className="flex items-center justify-center min-h-screen">

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

      {
          success.map(item=> <SuccessStoryCards
          key={item._id}
          item={item}
          >

          </SuccessStoryCards>)
      }
   </div>
   </div>
        </section>
    );
};

export default SuccessStory;