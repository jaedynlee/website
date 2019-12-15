import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRoute, faStreetView, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {  
    render() {
      return (
        <>
        <div className="parallax parallax-top text-right pr-md-5">
          <div className="header-text">
            <h1>Jaedyn Lee</h1>
            <p className="pt-2">computer science student, developer,<br></br>font enthusiast, tree hugger.</p>
          </div>
        </div>
        <div className="container-fluid p-5">
          <Row className="p-4 justify-content-center">
            <Col lg="8" xl="6" className="text-center text-md-left">
              <h4>about me</h4>
              <p>I am a BS/MS student at Northeastern University majoring in computer science. 
                I'm interested in full-stack software development and I want to make the world 
                a better place with technology. <b>I am currently seeking a full-time or part-time 
                role beginning in September 2020.</b></p>
            </Col>
          </Row>
          <Row className="p-4 justify-content-center text-center">
            <Col md="4" className="mt-3 pl-md-0">
              <FontAwesomeIcon className="section-img mb-4" icon={faRoute} size="3x"/>
              <h4>the journey so far</h4>
              <ul className="list-unstyled">
                <li>Incoming Intern at Amazon</li>
                <li>Project Lead at Generate</li>
                <li>Co-founder of FirstByte</li>
                <li>2 Co-ops at Draper &amp; Toast</li>
                <li>Black Belt in Tae Kwon-Do</li>
              </ul>
            </Col>
            <Col md="4" className="mt-3">
              <FontAwesomeIcon className="section-img mb-4" icon={faStreetView} size="3x"/>
              <h4>where to find me</h4>
              <ul className="list-unstyled">
                <li>Boston, Massachusetts</li>
                <li>
                  jaedyn.e.lee&#64;gmail.com
                </li>
                <li><a href="https://linkedin.com/in/jaedynlee" target="blank">LinkedIn</a></li>
                <li><a href="https://github.com/jaedynlee" target="blank">GitHub</a></li>
                <li><a href="Jaedyn Lee Resume.pdf" target="blank">Resume</a></li>
              </ul>
            </Col>
            <Col md="4" className="mt-3 pr-md-0">
              <FontAwesomeIcon className="section-img mb-4" icon={faGlobeAmericas} size="3x"/>
              <h4>other passions</h4>
              <ul className="list-unstyled">
                <li><a href="/art">Art</a>, UI &amp; UX Design</li>
                <li>Sustainability &amp; Greentech</li>
                <li>Travel &amp; Exploration</li>
                <li>Volleyball &amp; Martial Arts</li>
                <li>Boston Sports Teams</li>
              </ul>
            </Col>
          </Row>
          {/* <Row className="px-5 pt-5 mt-3 justify-content-center">
            <Col lg="8" xl="6" className="">
              <h4>Recommendations</h4>
              <ul>
                <li>Patriot Act (Netflix)</li>
                <li>Freakonomics (by Steven Levitt and Stephen Dubner)</li>
                <li>The Third Door (by Alex Banayan)</li>
                <li>Algorithms to Live By (by Brian Christian and Tom Griffiths)</li>
                <li>Factfulness (by Hans Rosling)</li>
                <li>The Mathematical Corporation (by Josh Sullivan and Angela Zutavern)</li>
                <li>RadioLab (Podcast)</li>
              </ul>
            </Col>
          </Row> */}
        </div>
        <div className="parallax parallax-bottom"></div>
        </>
      );
    }
  }
  
export default Home;
  