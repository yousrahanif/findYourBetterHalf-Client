import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PremiumCards from './PremiumCards';
import { Dropdown } from "flowbite-react";

const PremiumData = () => {
    const [premium, setPremium] = useState([]);
    const [sortOrder, setSortOrder] = useState("Ascending");

    useEffect(() => {
        fetch("http://localhost:5000/biodata")
        .then(res => res.json())
        .then(data => {
            const premiumData = data.filter(item => item.member_type === "premium" || item.member_type === "Premium");
            setPremium(premiumData);
        });
    }, []);

    const sortPremiumData=(order)=>{
        const sortedData=[...premium].sort((a,b)=>{
            if (order === 'Ascending') {
                return a.age - b.age;
            } else {
                return b.age - a.age;
            }
        })
        setPremium(sortedData)
        setSortOrder(order)
    }
    
    return (
        <section>
            <SectionTitle heading={"Be Our Prime Guest"} />
            
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center mb-4">
                    <Dropdown label="Sort by Age" dismissOnClick={false} style={{ backgroundColor: '#ef4444' }}>
                    <Dropdown.Item onClick={() => sortPremiumData('Ascending')}>Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortPremiumData('Descending')}>Descending</Dropdown.Item>
                    </Dropdown>
                </div>
                
                <div className="flex items-center justify-center min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {premium.slice(0, 6).map(item => (
                            <PremiumCards key={item._Id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumData;
