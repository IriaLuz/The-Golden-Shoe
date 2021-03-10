import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logoImage/logo2.png';

const NavbarPage = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">SHOP</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="center-navbar" href="#home">
        <img className="logo" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">ABOUT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
