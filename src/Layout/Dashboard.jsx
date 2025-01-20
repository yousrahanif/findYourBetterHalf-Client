import React, { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import DashboardNav from './DashboardNav';
import { IoCreateOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate(); 

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
    <div className='mx-auto w-11/12'>
      <DashboardNav />
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-4">
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item  icon={IoCreateOutline}>
                  <Link to="/dashboard/createBiodata">
                    Create Biodata
                  </Link>
                </Sidebar.Item>
                {/* <Sidebar.Item href="#" icon={FaRegEdit}>
                <Link  >
                    Edit Biodata
                  </Link>
                </Sidebar.Item> */}
                <Sidebar.Item href="#" icon={MdOutlinePreview} labelColor="dark">
                <Link to="/dashboard/viewBiodata">
                    View Biodata
                  </Link>
                </Sidebar.Item>

                
                <Sidebar.Item href="#" icon={IoIosContacts}>
                  My Contact Request
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={MdFavoriteBorder}>
                <Link to="/dashboard/favoriteBiodata"  >
                    Favorite Biodata
                  </Link>
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={IoIosLogOut}>
                  <NavLink onClick={handleSignOut}>
                    Logout
                  </NavLink>
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
