
import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterPage from '../pages/Shared/FooterPage/FooterPage';
import NavbarPage from '../pages/Shared/NavbarPage/NavbarPage';

const Main = () => {
    return (
        <div>
      <NavbarPage></NavbarPage>
            <Outlet></Outlet>
        <FooterPage></FooterPage>
            
           
        </div>
    );
};

export default Main;