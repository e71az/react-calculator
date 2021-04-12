import React from 'react';
import '../style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import NavDropdown from 'react-bootstrap/NavDropdown';

const MainNavbar = () => (
  <>
    <Navbar
      // className="d-flex justify-self-center"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#home">Math Magicians</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/calc">Calculator</Nav.Link>
          <Nav.Link href="/quote">Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default MainNavbar;
