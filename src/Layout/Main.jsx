
import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterPage from '../pages/Shared/FooterPage/FooterPage';
import NavbarPage from '../pages/Shared/NavbarPage/NavbarPage';
const Main = () => {
    return (
    
        <div 
        className="flex w-full flex-col min-h-screen bg-cover bg-center"
        // style={{ backgroundImage: `url(${bgImage})` }}
    >
            <NavbarPage />
            <main className="flex-grow">
                <Outlet />
            </main>
            <FooterPage />
        </div>
            
           
     
    );
};

export default Main;