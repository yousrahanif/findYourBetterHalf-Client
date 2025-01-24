import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllBiodata from "../pages/Biodata/AllBiodata";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BiodataDetails from "../pages/Biodata/BiodataDetails";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../components/Checkout";
import Dashboard from "../Layout/Dashboard";
import CreateBiodata from "../pages/Dashboard/CreateBiodata";
import ViewBiodata from "../pages/Dashboard/ViewBiodata";
import EditBiodata from "../pages/Dashboard/EditBiodata";
import FavoriteBiodata from "../pages/Dashboard/FavoriteBiodata";
import AboutUs from "../pages/Shared/AboutUs/AboutUs";
import ContactUs from "../pages/Shared/ContactUs/ContactUs";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AdminDashboard from "../pages/Dashboard/AdminHome/AdminDashboard";
import ManageUsers from "../pages/Dashboard/AdminHome/ManageUsers";
import GotMarried from "../pages/Dashboard/UserHome/GotMarried";
import LoveStory from "../pages/Dashboard/AdminHome/LoveStory";
import ContactReq from "../pages/Dashboard/AdminHome/ContactReq";
import MyContactReq from "../pages/Dashboard/UserHome/MyContactReq";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
      {
        path: '/',
        element: <Home></Home>

      }, 
      {
        path: 'biodata',
        element: <AllBiodata></AllBiodata>

      }, 
      {
        path: '/biodata/:id',
        element: <PrivateRoute>
          <BiodataDetails></BiodataDetails>

        </PrivateRoute>,
      loader: ({params})=>fetch(`https://matrimony-server-eight.vercel.app/biodata/${params.id}`)

      }, 
      {
        path: '/checkout/:biodataId',
        element: <PrivateRoute>
          <Checkout></Checkout>
        </PrivateRoute>,
loader: ({ params }) => fetch(`https://matrimony-server-eight.vercel.app/biodata/${params.biodataId}`)
},





      {
        path: 'login',
        element: <Login></Login>

      }, 

      {
        path: 'signup',
        element: <SignUp></SignUp>

      }, 
      {
        path: 'about',
        element: <AboutUs></AboutUs>

      }, 
      {
        path: 'contact',
        element: <ContactUs></ContactUs>

      }, 
      
      
      ]
    },

    {
      path:'dashboard', 
      element: <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children:[
       
        {
          path: 'userHome',
          element: <UserHome></UserHome>

        },
        {
          path:'createBiodata',
          element: <PrivateRoute>
            <CreateBiodata></CreateBiodata>
          </PrivateRoute>

        },
        {
          path:'myContactReq',
          element: <PrivateRoute>
           <MyContactReq></MyContactReq>
          </PrivateRoute>

        },
        {
          path:'favoriteBiodata',
          element: <PrivateRoute>
            <FavoriteBiodata></FavoriteBiodata>
          </PrivateRoute>

        },
        {
      
          path: 'viewbiodata',
          element: <PrivateRoute>
            <ViewBiodata />
          </PrivateRoute>,
         
        },
        {
          path: 'viewbiodata/editBiodata/:id',
          element: <PrivateRoute>
            <EditBiodata />
          </PrivateRoute>,
          loader: ({ params }) => fetch(`https://matrimony-server-eight.vercel.app/biodata/${params.id}`), 
        },

        {
          path: 'adminHome', 
          element: <AdminHome></AdminHome>
        },
        {
          path:'adminDash', 
          element: <PrivateRoute>
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        },
        {
          path:'manageUsers', 
          element: <PrivateRoute>
          <ManageUsers></ManageUsers>
          </PrivateRoute>
        },
        {
          path:'gotMarried', 
          element: <PrivateRoute>
         <GotMarried></GotMarried>
          </PrivateRoute>
        },
        {
          path:'loveStory', 
          element: <PrivateRoute>
<LoveStory></LoveStory>         
 </PrivateRoute>
        },
        {
          path:'approvedContact', 
          element: <PrivateRoute>
<ContactReq></ContactReq>     
 </PrivateRoute>
        },

        
        

      ]
    }
  ]);