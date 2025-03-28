import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Card } from 'flowbite-react';

const CounterSection = () => {
    const [counters, setCounters] = useState({
        totalBiodata: 0,
        totalGirls: 0,
        totalBoys: 0,
        totalMarriages: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCounters = () => {
            fetch('https://matrimony-server-eight.vercel.app/successCounter')
            .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setCounters(data);
                        setLoading(false);
                    }
                })
                
        };

        fetchCounters();
    }, []);

    return (
        <div className='mx-auto w-10/12 mt-14'>
            <SectionTitle
                heading={"Biodata Statistics"}
            />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="mt-4 ">
                    {/* <p>Total Biodata: {counters.totalBiodata}</p>
                    <p>Total Girls: {counters.totalGirls}</p>
                    <p>Total Boys: {counters.totalBoys}</p>
                    <p>Total Marriages: {counters.totalMarriages}</p> */}


<Card className=''>
        
        <div className="grid grid-cols-2 gap-4 text-center ">
          <div className="bg-red-200 rounded-lg p-4 shadow">
            <p className="font-light text-2xl text-black">Total Biodata</p>
            <p className="text-xl font-light text-black">{counters.totalBiodata}</p>
          </div>
          <div className="bg-red-200 rounded-lg p-4 shadow">
            <p className="font-light text-2xl text-black">Total Girls</p>
            <p className="text-xl font-light text-black">{counters.totalGirls}</p>
          </div>
          <div className="bg-red-200 rounded-lg p-4 shadow">
            <p className="font-light text-2xl text-black">Total Boys</p>
            <p className="text-xl font-light text-black">{counters.totalBoys}</p>
          </div>
          <div className="bg-red-200 rounded-lg p-4 shadow">
            <p className="font-light text-2xl text-black">Total Marriages</p>
            <p className="text-xl font-light text-black">{counters.totalMarriages}</p>
          </div>
        </div>
      </Card>
                </div>
            )}
        </div>
    );
};

export default CounterSection;
