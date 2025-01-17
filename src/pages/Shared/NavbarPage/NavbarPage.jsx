import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'


import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";
const NavbarPage = () => {
    return (
        <div className="sticky top-0 z-50">
            <Navbar fluid rounded>
      <NavbarBrand as={Link} to="/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LoveForever</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem as={Link} to="" >Dashboard</DropdownItem>
          <DropdownItem as={Link} to="">Settings</DropdownItem>
          <DropdownItem as={Link} to="">Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem as={Link} to="">Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" className="bg-red-600 " active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/biodata">Biodatas</NavbarLink>
        <NavbarLink as={Link} to="">About Us</NavbarLink>
        <NavbarLink  as={Link} to="">Contact Us</NavbarLink>
        <NavbarLink as={Link} to="">Dashboard</NavbarLink>
      </NavbarCollapse>
    </Navbar>
        </div>
    );
};

export default NavbarPage;