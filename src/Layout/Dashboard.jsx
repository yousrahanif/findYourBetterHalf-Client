



import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import DashboardNav from './DashboardNav';
import { IoCreateOutline } from 'react-icons/io5';
import { MdOutlinePreview, MdFavoriteBorder, MdWorkspacePremium } from 'react-icons/md';
import { IoIosContacts, IoIosLogOut } from 'react-icons/io';
import { AuthContext } from '../providers/AuthProvider';
import { RiAdminLine, RiContactsFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { GiLovers } from "react-icons/gi";


import Swal from 'sweetalert2';

const Dashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (user?.email) {
  
      fetch(`https://matrimony-server-eight.vercel.app/users/${user.email}`)
        .then((res) => {
          if (res.ok) {
            return res.json(); 
          } else {
            console.log("failed:", res.status); 
            return null; 
          }
        })
        .then((data) => {
          if (data) {
            console.log(" user role:", data); 
            setUserRole(data.role); 
          } else {
            console.log("No data received"); 
          }
        })
        .catch((error) => {
          console.log("Fetch error:", error.message); 
        });
    }
  }, [user]);
  

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto w-11/12">
      <DashboardNav />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-4">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {userRole === 'normal' && (
                  <>
                    <Sidebar.Item icon={IoCreateOutline}>
                      <Link to="/dashboard/createBiodata">Create Biodata</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={MdOutlinePreview}>
                      <Link to="/dashboard/viewBiodata">View Biodata</Link>
                    </Sidebar.Item>
                    {/* <Sidebar.Item icon={IoIosContacts}>
                    <Link to="/dashboard/myContactReq">My Contact Req</Link>
                    </Sidebar.Item> */}
                    <Sidebar.Item icon={MdFavoriteBorder}>
                      <Link to="/dashboard/favoriteBiodata">Favorite Biodata</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={GiLovers}>
                      <Link to="/dashboard/gotMarried">Got Married</Link>
                    </Sidebar.Item>
                  </>
                )}
                {userRole === 'admin' && (
                  <>
                    <Sidebar.Item icon={RiAdminLine}>
                      <NavLink to="/dashboard/adminDash">Admin Dashboard</NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={FaUsers}>
                      <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                    </Sidebar.Item>
                    <Sidebar.Item icon={MdWorkspacePremium}>
                      <NavLink to="/dashboard/approvedPremium">Approved Premium</NavLink>
                    </Sidebar.Item>
                    {/* <Sidebar.Item icon={RiContactsFill}>
                      <NavLink to="/dashboard/approvedContact">Approved Contact</NavLink>
                    </Sidebar.Item> */}
                    <Sidebar.Item icon={GiLovers}>
                      <NavLink to="/dashboard/loveStory">Success Story</NavLink>
                    </Sidebar.Item>
                  </>
                )}
                <Sidebar.Item icon={IoIosLogOut}>
                  <NavLink onClick={handleSignOut}>Logout</NavLink>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="col-span-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

