import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logoImage/logo2.png';

const NavbarComponent = () => {
  return (
    <>
      <div className="logo-container">
        <a data-testid="logo-link-navbar" href="#home">
          <img className="navbar-logo" src={logo} alt="logo" />
        </a>
      </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link data-testid="shoplink-navbar" href="#home">
              SHOP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link data-testid="aboutlink" href="#home">
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
