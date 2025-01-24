import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewBiodata = () => {
  const { user, loading } = useContext(AuthContext); 
  const [biodata, setBiodata] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://matrimony-server-eight.vercel.app/biodata/user?email=${user.email}`)
        .then((response) => response.json())
        .then((data) => setBiodata(data))
    }
  }, [user]);


  // const handleMakePremium = (bio) => {
  //   fetch('https://matrimony-server-eight.vercel.app/biodata/makePremium', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ 

  //       bioId: bio._id,
  //       user_email: user?.email,
       
  //      }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.insertedId>0) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'User has been made Premium',
  //           text: `Inserted ID: ${data.insertedId}`,
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Failed to make premium',
  //           text: data.message || 'Something went wrong',
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Something went wrong',
  //         text: 'Please try again later',
  //       });
  //     });
  // };


  const handleMakePremium = (bio) => {
    fetch('https://matrimony-server-eight.vercel.app/biodata/makePremium', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      
        email: user?.email, 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Request Sent to be Premium',
           
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed to make premium',
            text: data.message || 'Something went wrong',
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: 'Please try again later',
        });
      });
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  

  if (!biodata.length) {
    return <div>No biodata found.</div>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center p-4">My Biodata</h1>
      <div className="space-y-6">
        {biodata.map((bio, index) => (
          <div key={index} className="card bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img src={bio.profile_image} alt="Profile" className="w-24 h-24 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">{bio.name}</h2>
                <p>{bio.occupation} | {bio.age} years old</p>
              </div>
            </div>
            <div className="mt-4">
              <p><strong>Date of Birth:</strong> {bio.date_of_birth}</p>
              <p><strong>Height:</strong> {bio.height} cm</p>
              <p><strong>Weight:</strong> {bio.weight} kg</p>
              <p><strong>Race:</strong> {bio.race}</p>
              <p><strong>Father's Name:</strong> {bio.fathers_name}</p>
              <p><strong>Mother's Name:</strong> {bio.mothers_name}</p>
              <p><strong>Permanent Division:</strong> {bio.permanent_division}</p>
              <p><strong>Present Division:</strong> {bio.present_division}</p>
              <p><strong>Expected Partner's Age:</strong> {bio.expected_partner_age}</p>
              <p><strong>Expected Partner's Height:</strong> {bio.expected_partner_height} cm</p>
              <p><strong>Expected Partner's Weight:</strong> {bio.expected_partner_weight} kg</p>
              <p><strong>Contact Email:</strong> {bio.contact_email}</p>
              <p><strong>Mobile Number:</strong> {bio.mobile_number}</p>
            </div>
            <div className="flex items-center justify-center">
           <div>
           <Link  to={`editBiodata/${bio._id}`}>
  <button  className="rounded-lg bg-red-500 px-5 py-2.5 m-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-900 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
    Edit
  </button>
</Link>
           </div>
           <div>
           <Link  >
  <button  onClick={() => handleMakePremium(bio._id)}

    className="rounded-lg bg-red-500 px-5 py-2.5 m-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-900 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
     Make Premium
  </button>
</Link>
           </div>
           </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBiodata;
