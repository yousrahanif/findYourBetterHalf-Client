// import React, { useContext } from 'react';
// import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
// import { Sidebar } from "flowbite-react";
// import DashboardNav from './DashboardNav';
// import { IoCreateOutline } from "react-icons/io5";
// import { MdOutlinePreview } from "react-icons/md";
// import { IoIosContacts } from "react-icons/io";
// import { MdFavoriteBorder } from "react-icons/md";
// import { IoIosLogOut } from "react-icons/io";
// import { AuthContext } from '../providers/AuthProvider';
// import { RiAdminLine } from "react-icons/ri";
// import { FaUsers } from "react-icons/fa";
// import { MdWorkspacePremium } from "react-icons/md";
// import { RiContactsFill } from "react-icons/ri";

// const Dashboard = () => {
//   const { user, signOutUser } = useContext(AuthContext);
//   const navigate = useNavigate(); 

//   const handleSignOut = () => {
//     signOutUser()
//       .then(() => {
//         navigate('/'); 
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className='mx-auto w-11/12'>
//       <DashboardNav />
//       <div className="grid grid-cols-12 gap-4 mt-4">
//         <div className="col-span-4">
//           <Sidebar aria-label="Default sidebar example">
//             <Sidebar.Items>
//               <Sidebar.ItemGroup>
//                 <Sidebar.Item  icon={IoCreateOutline}>
//                   <Link to="/dashboard/createBiodata">
//                     Create Biodata
//                   </Link>
//                 </Sidebar.Item>
//                 {/* <Sidebar.Item href="#" icon={FaRegEdit}>
//                 <Link  >
//                     Edit Biodata
//                   </Link>
//                 </Sidebar.Item> */}
//                 <Sidebar.Item href="#" icon={MdOutlinePreview} labelColor="dark">
//                 <Link to="/dashboard/viewBiodata">
//                     View Biodata
//                   </Link>
//                 </Sidebar.Item>

                
//                 <Sidebar.Item href="#" icon={IoIosContacts}>
//                   My Contact Request
//                 </Sidebar.Item>
//                 <Sidebar.Item href="#" icon={MdFavoriteBorder}>
//                 <Link to="/dashboard/favoriteBiodata"  >
//                     Favorite Biodata
//                   </Link>
//                 </Sidebar.Item>

//                 <Sidebar.Item href="#" icon={RiAdminLine}>
//                   <NavLink >
//                     Admin Dashboard
//                   </NavLink>
//                 </Sidebar.Item>


//                 <Sidebar.Item href="#" icon={FaUsers}>
//                   <NavLink >
//                     Manage Users
//                   </NavLink>
//                 </Sidebar.Item>



//                 <Sidebar.Item href="#" icon={MdWorkspacePremium}>
//                   <NavLink >
//                     Approved Premium
//                   </NavLink>
//                 </Sidebar.Item>


//                 <Sidebar.Item href="#" icon={RiContactsFill} >
//                   <NavLink >
//                     Approved Contact
//                   </NavLink>
//                 </Sidebar.Item>



//                 <Sidebar.Item href="#" icon={IoIosLogOut}>
//                   <NavLink onClick={handleSignOut}>
//                     Logout
//                   </NavLink>
//                 </Sidebar.Item>
//               </Sidebar.ItemGroup>
//             </Sidebar.Items>
//           </Sidebar>
//         </div>
//         <div className="col-span-8">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



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
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      console.log(`Fetching role for email: ${user.email}`); 
  
      fetch(`http://localhost:5000/users/${user.email}`)
        .then((res) => {
          if (res.ok) {
            return res.json(); 
          } else {
            console.log("Fetch failed with status:", res.status); 
            return null; 
          }
        })
        .then((data) => {
          if (data) {
            console.log("Fetched user role:", data); 
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
                {userRole === 'user' && (
                  <>
                    <Sidebar.Item icon={IoCreateOutline}>
                      <Link to="/dashboard/createBiodata">Create Biodata</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={MdOutlinePreview}>
                      <Link to="/dashboard/viewBiodata">View Biodata</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={IoIosContacts}>
                      My Contact Request
                    </Sidebar.Item>
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
                    <Sidebar.Item icon={RiContactsFill}>
                      <NavLink to="/dashboard/approvedContact">Approved Contact</NavLink>
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

