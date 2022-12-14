import React, {useState} from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import styled from 'styled-components';

function Navbar(){
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    return (
    <>
    <nav className='navbar'>
      <div className = "nav-container">
        <StyledNavLink className = "logo-image" to = "/"><img src = "/logo.png" className = "logo-image"></img></StyledNavLink>
        <StyledNavLink to = "/" className = "nav-logo">
          Davis PISO
        </StyledNavLink>

        <ul className= {click ? "nav-menu active" : "nav-menu"}>
          <li className = "nav-item">
            <StyledNavLink to = "/" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Home
            </StyledNavLink>
          </li>
          {/* <li className = "nav-item">
            <StyledNavLink to = "/events" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Events
            </StyledNavLink>
          </li> */}
          <li className = "nav-item">
            <StyledNavLink to = "/joinus" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Join Us
            </StyledNavLink>
          </li>
          <li className = "nav-item">
            <StyledNavLink to = "/contact" activeClassName = "active" className = "nav-links" onClick = {handleClick}>
              Contact
            </StyledNavLink>
          </li>
        </ul>
        <div className = "nav-icon" onClick = {handleClick}>
            <i className = {click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  </>
    )
}

const StyledNavLink = styled(NavLink)`
  text-emphasis: none;
  text-decoration: none;
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: black;
  }
`;

export default Navbar;