import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' /> 
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
         
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/studsignup'>Student SignIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/teachsignup'>Teacher SignIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/adminlogin'>Admin Login</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;