import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logoImage/logo2.png';

const NavbarComponent = () => {
  return (
    <>
      <div className="logo-container">
        <Link data-testid="logo-link-navbar" to="/">
          <img className="navbar-logo" src={logo} alt="logo" />
        </Link>
      </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link data-testid="shoplink-navbar" to="/products">
              SHOP
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link data-testid="aboutlink" href="/about">
              ABOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
