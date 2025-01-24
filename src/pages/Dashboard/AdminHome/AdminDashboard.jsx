import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
    const [counters, setCounters] = useState({
        totalBiodata: 0,
        totalGirls: 0,
        totalBoys: 0,
        totalMarriages: 0,
        totalRevenue: 0,
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
                .catch((err) => setError("Failed to fetch data"));
        };

        fetchCounters();
    }, []);

    const pieData = {
      labels: ['Total Biodata', 'Total Girls', 'Total Boys', 'Total Marriages', 'Total Revenue', 'Total Premium'],
      datasets: [
          {
              data: [
                  counters.totalBiodata,
                  counters.totalGirls,
                  counters.totalBoys,
                  counters.totalMarriages,
                  counters.totalRevenue,
                  counters.totalPremium, // Add this field
              ],
              backgroundColor: ['#3498db', '#e91e63', '#2ecc71', '#f39c12', '#f1c40f', '#9b59b6'], // You can add a color for totalPremium
          },
      ],
  };
  

    return (
        <div className='mx-auto w-11/12'>
            <SectionTitle heading={"Total Count"} />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="mt-4">
                    <Card>
                        <div className="grid grid-cols-2 gap-4 text-center">
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
                            <div className="bg-orange-100 rounded-lg p-4 shadow">
                                <p className="text-sm font-medium text-gray-600">Total Premium</p>
                                <p className="text-xl font-bold text-yellow-600">{counters.totalPremium}</p>
                            </div>
                            <div className="bg-yellow-100 rounded-lg p-4 shadow">
                                <p className="text-sm font-medium text-gray-600">Total Marriages</p>
                                <p className="text-xl font-bold text-yellow-600">{counters.totalMarriages}</p>
                            </div>

                            <div className="bg-yellow-100 rounded-lg p-4 shadow">
                                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                                <p className="text-xl font-bold text-yellow-600">{counters.totalRevenue}</p>
                            </div>
                        </div>
                    </Card>

                    <div className="mt-6">
                      <SectionTitle heading={"Data Distribution"}></SectionTitle>
                        <div className="mt-4 w-80 mx-auto">
                            <Pie data={pieData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
