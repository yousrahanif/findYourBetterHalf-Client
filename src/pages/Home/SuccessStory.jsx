import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SuccessStoryCards from './SuccessStoryCards';
import { Dropdown } from "flowbite-react";

const SuccessStory = () => {
      const [success, setSuccess]=useState([])
          const [sortOrder, setSortOrder] = useState("Ascending");
      
        useEffect(()=>{
            fetch("https://matrimony-server-eight.vercel.app/success")
            .then(res=>res.json())
            .then(data=>{
                // const successData=data.filter(item=>item.Member_Type==="Premium")
                setSuccess(data)
            })
        },[])
        const sortedSuccessStory = (order) => {
            const sortedData = [...success].sort((a, b) => {
                if (order === 'Ascending') {
                    return new Date(a.marriageDate) - new Date(b.marriageDate);
                } else {
                    return new Date(b.marriageDate) - new Date(a.marriageDate);
                }
            });
            setSuccess(sortedData);
            setSortOrder(order);
        };
    return (
        <section>
            <SectionTitle heading={"Success Story"} />
            
            <div className="flex flex-col items-center mb-6">
                <Dropdown label={'Sort by Success Date'} dismissOnClick={false} style={{ backgroundColor: '#ef4444' }}>
                    <Dropdown.Item onClick={() => sortedSuccessStory('Ascending')}>Ascending</Dropdown.Item>
                    <Dropdown.Item onClick={() => sortedSuccessStory('Descending')}>Descending</Dropdown.Item>
                </Dropdown>
            </div>
            
            <div className="flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {success.map(item => (
                        <SuccessStoryCards key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStory;