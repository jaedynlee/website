import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import '../css/navbar.css';
import brandImage from '../img/brand/logo-white.png';

class NavigationBar extends React.Component {  
    render() {
      return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Navbar.Brand href="/"><img src={brandImage} alt="JL" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav>
                  <Link exact to="/" className="nav-link">Home</Link>
                  <Link exact to="/experience" className="nav-link">Experience &amp; Skills</Link>
                  <Link to="/education" className="nav-link">Education &amp; Projects</Link>
                  <Link to="/leadership" className="nav-link">Leadership</Link>
                </Nav>
                <Nav>
                  <Nav.Link to="https://github.com/jaedynlee" target="blank">
                    <FontAwesomeIcon icon={ faGitSquare } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                  <Nav.Link to="https://linkedin.com/in/jaedynlee" target="blank">
                    <FontAwesomeIcon icon={ faLinkedin } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                  <Nav.Link to="../Jaedyn Lee Resume.pdf" target="blank">
                    <FontAwesomeIcon className="navbar-icon" icon={ faFileDownload } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default NavigationBar;
  