import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useParams } from 'react-router-dom';

const ProfileData = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userType } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user?.email) {
          setLoading(false);
          return;
        }

        let apiUrl;
        if (userType === 'admin' || userType === 'user') {
          apiUrl = `https://matrimony-server-eight.vercel.app/users/${user.email}`;
        } else {
          throw new Error("Invalid user type");
        }

        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, userType]);

  if (loading) return <div className="text-center text-red-500 font-bold">Loading profile...</div>;
  if (error) return <div className="text-center text-red-500 font-semibold">Error: {error}</div>;
  if (!profileData) return <div className="text-center text-red-500 font-semibold">No profile data found.</div>;

  return (
    <div className="w-11/12 mx-auto text-center mt-8">
      <h1 className="text-4xl font-extrabold text-white bg-red-600 py-3 rounded-md shadow-lg">
        {userType === 'admin' ? "Admin Profile" : "User Profile"}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mt-6 bg-white p-6 rounded-lg shadow-xl border-2 border-red-500">
  
        <div className="md:w-1/3 text-center">
          <img
            src={profileData.metadata?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"}
            alt="Profile"
            className="rounded-full w-40 h-40 mx-auto border-4 border-red-500 shadow-md"
          />
        </div>


        <div className="md:w-2/3 text-left">
          <div className="mb-4">
            <p className="text-lg font-bold text-red-500">Name:</p>
            <p className="text-xl font-semibold">{profileData.displayName}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold text-red-500">Email:</p>
            <p className="text-xl font-semibold">{profileData.email}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold text-red-500">Phone:</p>
            <p className="text-xl font-semibold">{profileData.phone || "Not available"}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold text-red-500">Address:</p>
            <p className="text-xl font-semibold">{profileData.address || "Not available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
