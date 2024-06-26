import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {/* Navbar for screens wider than 600px */}
      <Navbar expand="lg" className="shadow-sm d-none d-lg-block">
        <Container className='page-container'>
          <Navbar.Brand href="/" className=' col-6 text-white brand-style'>Mother Music</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto d-flex align-items-center nav-links-container">
              <Nav.Link href="/" className="nav-link-custom text-white">Home</Nav.Link>
              <Nav.Link href="/features" className="nav-link-custom text-white">Features</Nav.Link>
              <Nav.Link href="/contact" className="nav-link-custom text-white">Contact</Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom text-white">About</Nav.Link>
              <Nav.Link href="https://www.youtube.com/channel/CHANNEL_ID" target="_blank">
              <img 
              className='headimg'
                src="data:image/png;base64,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" 
                alt="Clickable Image" 
                style={{ cursor: 'pointer' }} 
              />
            </Nav.Link>
 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu bar for screens less than 600px */}
      <Navbar expand="lg" className="shadow-sm d-lg-none bg-dark navbar-dark">
        <Container className='page-container'>
          <Navbar.Brand href="/" className='col-6 text-white brand-style'>Mother Music</Navbar.Brand>
          <Navbar.Toggle aria-controls=" basic-navbar-nav" onClick={toggleNavbar} />
          <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
            <Nav className="ml-auto d-flex align-items-center nav-links-container">
              <Nav.Link href="/" className="nav-link-custom text-white">Home</Nav.Link>
              <Nav.Link href="/features" className="nav-link-custom text-white">Features</Nav.Link>
              <Nav.Link href="/contact" className="nav-link-custom text-white">Contact</Nav.Link>
              <Nav.Link href="/about" className="nav-link-custom text-white">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

