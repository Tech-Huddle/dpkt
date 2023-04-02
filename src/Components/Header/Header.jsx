import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import Routing from './Routing';
function Header() {
  return (
    <div>
      <div>Heading div</div>





      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>DPKT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/PhotoGallery'>Photo Gallery</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to = '/action1'>Action1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to = '/action2'>Action2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to = '/action3'>Action3</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





      {/* routes for the navbar component in header*/}
      <Routing/>
      </div>
  );
}

export default Header