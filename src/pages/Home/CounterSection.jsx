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
            fetch('http://localhost:5000/successCounter')
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
        <div className='mx-auto w-11/12'>
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
          <div className="bg-blue-100 rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-gray-600">Total Biodata</p>
            <p className="text-xl font-bold text-blue-600">{counters.totalBiodata}</p>
          </div>
          <div className="bg-pink-100 rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-gray-600">Total Girls</p>
            <p className="text-xl font-bold text-pink-600">{counters.totalGirls}</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-gray-600">Total Boys</p>
            <p className="text-xl font-bold text-green-600">{counters.totalBoys}</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-4 shadow">
            <p className="text-sm font-medium text-gray-600">Total Marriages</p>
            <p className="text-xl font-bold text-yellow-600">{counters.totalMarriages}</p>
          </div>
        </div>
      </Card>
                </div>
            )}
        </div>
    );
};

export default CounterSection;
