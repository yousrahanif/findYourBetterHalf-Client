import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PremiumCards from './PremiumCards';

const PremiumData = () => {
    const [premium, setPremium]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/biodata")
        .then(res=>res.json())
        .then(data=>{
            const premiumData = data.filter(item => item.member_type === "premium" || item.member_type === "Premium");
            setPremium(premiumData)
        })
    },[])
    return (
        <section>
             <SectionTitle
             
                 heading={"Be Our Prime Guest"}
                 >
            
            
                 </SectionTitle>
                 <div className="flex items-center justify-center min-h-screen">

              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

                    {
                         premium.slice(0, 6).map(item=> <PremiumCards
                        key={item._Id}
                        item={item}
                        >

                        </PremiumCards>)
                    }
                 </div>
                 </div>

            
        </section>
    );
};

export default PremiumData;