import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/experience">Experience &amp; Skills</Nav.Link>
                  <Nav.Link href="/education">Education &amp; Projects</Nav.Link>
                  <Nav.Link href="/leadership">Leadership</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="https://github.com/jaedynlee" target="blank">
                    <FontAwesomeIcon icon={ faGitSquare } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                  <Nav.Link href="https://linkedin.com/in/jaedynlee" target="blank">
                    <FontAwesomeIcon icon={ faLinkedin } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                  <Nav.Link href="../Jaedyn Lee Resume.pdf" target="blank">
                    <FontAwesomeIcon className="navbar-icon" icon={ faFileDownload } size="2x"></FontAwesomeIcon>
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default NavigationBar;
  