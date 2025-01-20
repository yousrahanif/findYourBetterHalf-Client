




import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Card } from 'flowbite-react';
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import AllBiodataCards from './AllBiodataCards';
import Swal from 'sweetalert2';
import SimilarBiodataCards from './SimilarBiodataCards';

const BiodataDetails = () => {
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  const { _id, bioId, race, name, biodata_type, date_of_birth, height, weight, profile_image, permanent_division, age, occupation, fathers_name, mothers_name, expected_partner_age, expected_partner_height, expected_partner_weight, contact_email, mobile_number, member_type, present_division } = item;

  const [similarBiodata, setSimilarBiodata] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const [favoriteIds, setFavoriteIds] = useState([]);
  
  
  
  useEffect(() => {
    fetch(`http://localhost:5000/biodata/similar/${_id}`)
      .then((res) => res.json())
      .then((data) => setSimilarBiodata(data))
      .catch((err) => console.error('Error fetching similar biodata:', err));


      if (user?.email) {
        fetch(`http://localhost:5000/favorites/user?email=${user.email}`)
          .then((response) => response.json())
          .then((data) => {
            const favoriteBiodataIds = data.map(fav => fav.biodataId);
            setFavoriteIds(favoriteBiodataIds);
  
            // Check if the current biodata is already in the user's favorites
            if (favoriteBiodataIds.includes(_id)) {
              setIsFavorite(true);
            }
          })
          .catch((err) => console.error('Error fetching favorites:', err));
      }
    },



   [_id, user]);









  const handleFavoriteClick = () => {
    if (isFavorite) {
      Swal.fire({
        title: "Already in Favorites",
        text: "This biodata is already in your favorites list.",
        icon: "info"
      });
      return;
    }

    const biodataDetails = {
      bioId,
      name,
      biodata_type,
      date_of_birth,
      height,
      weight,
      race,
      occupation,
      fathers_name,
      mothers_name,
      expected_partner_age,
      expected_partner_height,
      expected_partner_weight,
      contact_email,
      mobile_number,
      permanent_division,
      present_division,
      profile_image,
      
    };

    fetch('http://localhost:5000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        biodataId: _id,
        userEmail: user.email, 
        biodataDetails: biodataDetails, 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
      



        if (data.insertedId) {
          Swal.fire({
            title: "Done!",
            text: "Successfully Added as Favorite",
            icon: "success"
          });
          setIsFavorite(true); 
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Failed to add to favorites.",
          icon: "error"
        });
        console.error('Error adding to favorites:', err);
      });
  };








  return (
    <div className='mx-auto w-11/12'>
      <Card>
        <div className="flex items-center justify-center h-full">
          <img 
            src={profile_image} 
            alt="Profile image" 
            className="w-[200px] h-[220px] object-cover mx-auto" 
          />
        </div>           
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            {name.toUpperCase()}
          </h5>
        </a>
        <div className="mb-2 mt-2.5 flex flex-col items-center"> 
          <div className="flex items-center mb-1"> 
            <p className="mr-2">Biodata Id: {bioId} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Gender: {biodata_type} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">DOB: {date_of_birth} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Age: {age} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Height: {height} ft </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Weight: {weight} kg </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Skin Type: {race} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Occupation: {occupation} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Permanent Division: {permanent_division} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Present Division: {present_division} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Father's Name: {fathers_name} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Mother's Name: {mothers_name} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Expected Partner's Age: {expected_partner_age} </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Expected Partner's Height: {expected_partner_height} ft </p>
          </div>
          <div className="flex items-center"> 
            <p className="mr-2">Expected Partner's Weight: {expected_partner_weight} kg </p>
          </div>
          {user.member_type === 'premium' ? (
            <>
              <div className="flex items-center"> 
                <p className="mr-2">Contact Email: {contact_email}</p>
              </div>
              <div className="flex items-center"> 
                <p className="mr-2">Contact Phone: {mobile_number}</p>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <Link to={`/checkout/${_id}`}>
                <button className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4">
                  Request Contact Info
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link >
            <button  onClick={handleFavoriteClick} className="rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4"
           
            >
              <FaRegHeart className='text-3xl' />
            </button>
          </Link>
        </div>
      </Card>

      <div className="mt-4">
        <h3 className="text-2xl font-semibold">Similar Biodata</h3>
        <div className="grid grid-cols-3 gap-4">
          {similarBiodata.length > 0 ? (
            similarBiodata.map((similarItem) => (
              <SimilarBiodataCards key={similarItem._id} item={similarItem} />
            ))
          ) : (
            <p>No similar biodata found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
