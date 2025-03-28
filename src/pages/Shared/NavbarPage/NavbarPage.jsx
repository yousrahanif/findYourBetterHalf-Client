import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'


import {
    Avatar,
    Button,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Label,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    ToggleSwitch,
  } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavbarPage = () => {
  const { user, signOutUser } = useContext(AuthContext);
 
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };
  
  



  const handleSignOut = () => {
    signOutUser()
      .then(() => {
      })
      .catch((error) => {
      });
  };


 



    return (
      <div className="sticky top-0 z-50 w-full">
      <Navbar fluid rounded  className="w-full">
        <NavbarBrand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LoveForever</span>
        </NavbarBrand>
        <div className="flex md:order-2">


        {/* <ToggleSwitch
                        checked={theme === 'dark'}
                        onClick={toggleTheme}
                        label="" 
                        className="p-2 "
                    /> */}




          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user.metadata.photoURL} rounded />
             
                // <img src={user.metadata.photoURL} alt="User" style={{ borderRadius: "50%" }} />

              }
            >
              <DropdownHeader>
                <span className="block text-sm">{user.displayName}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </DropdownHeader>
              <DropdownItem as={Link} to="/dashboard">Dashboard</DropdownItem>
              {/* <DropdownItem as={Link} to="/settings">Settings</DropdownItem> */}
              {/* <DropdownItem as={Link} to="/earnings">Earnings</DropdownItem> */}
              <DropdownDivider />
              <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
            </Dropdown>
          ) : (
            <Button as={Link} to="/login" className="bg-red-600">Sign In</Button>
          )}
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          {/* <NavbarLink as={Link} to="/" className="bg-red-600" active>
            Home
          </NavbarLink> */}
          <NavbarLink as={Link} to="/biodata">Biodatas</NavbarLink>
          <NavbarLink as={Link} to="/about">About Us</NavbarLink>
          <NavbarLink as={Link} to="/contact">Contact Us</NavbarLink>
          {user && <NavbarLink as={Link} to="/dashboard">Dashboard</NavbarLink>}
        </NavbarCollapse>
      </Navbar>
    </div>
    );
};

export default NavbarPage;