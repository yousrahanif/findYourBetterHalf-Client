import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png'


const DashboardNav = () => {
   
    return (
        <div>
             <div className="sticky top-0 z-50">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LoveForever</span>
        </NavbarBrand>
     
        <NavbarCollapse>
          <NavbarLink as={Link} to="/" className="bg-red-600" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/biodata">Biodatas</NavbarLink>
          <NavbarLink as={Link} to="/about">About Us</NavbarLink>
          <NavbarLink as={Link} to="/contact">Contact Us</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
        </div>
    );
};

export default DashboardNav;