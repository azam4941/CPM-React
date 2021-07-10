import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    
    <>
    
      <Nav>
        {/* <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' /> 
        </NavLink> */}
        <Bars />
        <NavMenu>
          
         
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/newsevents' activeStyle>
            News and Events
          </NavLink>
         
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>SignIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/'>Admin Login</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/studsignup'>Student SigUp</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/techsignup'>Teacher Sigup</NavBtnLink>
        </NavBtn>
        
        

      </Nav>
    </>
  );
};

export default Navbar;